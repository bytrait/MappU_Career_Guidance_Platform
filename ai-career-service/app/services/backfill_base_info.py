import asyncio
import logging
from sqlalchemy.orm import Session, joinedload

from app.db.session import SessionLocal
from app.db.models.career import Career, CareerTranslation
from app.services.ai_client import fetch_base_info

logger = logging.getLogger(__name__)

MAX_CONCURRENT = 3


async def run_base_info_backfill():
    """
    AI enrichment backfill.
    AI is used ONLY to fill missing:
    - aptitude_vec
    - English description
    - cost / salary fields

    Existing RIASEC, OCEAN, category_id are NEVER overwritten.
    """
    logger.info("🔍 Starting AI enrichment backfill...")
    db = SessionLocal()

    try:
        careers = (
            db.query(Career)
            .options(joinedload(Career.translations))
            .filter(
                # missing aptitude
                (Career.aptitude_vec.is_(None))
                |
                # OR missing English description
                (
                    ~Career.translations.any(
                        (CareerTranslation.language == "en")
                        & (CareerTranslation.description.isnot(None))
                    )
                )
            )
            .all()
        )

        if not careers:
            logger.info("✅ No careers require AI enrichment.")
            return {"status": "ok", "message": "Nothing to enrich."}

        logger.info(f"🧠 {len(careers)} careers require enrichment.")
        sem = asyncio.Semaphore(MAX_CONCURRENT)

        async def process_career(career: Career):
            async with sem:
                en_translation = next(
                    (t for t in career.translations if t.language == "en"),
                    None,
                )

                if not en_translation or not en_translation.title:
                    logger.warning(
                        f"⚠️ Career ID={career.id} skipped — missing English title."
                    )
                    return {
                        "career_id": career.id,
                        "status": "skipped",
                        "reason": "no English title",
                    }

                career_title = en_translation.title.strip()

                missing = []
                if career.aptitude_vec is None:
                    missing.append("aptitude")
                if not en_translation.description:
                    missing.append("description")

                logger.info(
                    f"🚀 Enriching '{career_title}' | missing: {missing}"
                )

                try:
                    ai_output = await fetch_base_info(career_title)

                    if not ai_output or "base_info" not in ai_output:
                        raise ValueError("Invalid AI response")

                    _store_base_info(
                        db=db,
                        career=career,
                        translation=en_translation,
                        base_info=ai_output["base_info"],
                    )

                    db.commit()
                    logger.info(f"✅ Enriched: {career_title}")
                    return {"career": career_title, "status": "success"}

                except Exception as e:
                    db.rollback()
                    logger.error(f"❌ Failed for {career_title}: {e}")
                    return {
                        "career": career_title,
                        "status": "failed",
                        "error": str(e),
                    }

        results = await asyncio.gather(
            *[process_career(c) for c in careers]
        )

        return {"status": "done", "results": results}

    finally:
        db.close()


def _store_base_info(
    db: Session,
    career: Career,
    translation: CareerTranslation,
    base_info: dict,
):
    """
    Store AI-generated info WITHOUT overwriting existing curated data.
    """
    try:
        # -----------------------------
        # Financial info (NULL only)
        # -----------------------------
        if career.min_cost is None:
            career.min_cost = base_info.get("min_cost")

        if career.avg_cost is None:
            career.avg_cost = base_info.get("avg_cost")

        if career.high_cost is None:
            career.high_cost = base_info.get("high_cost")

        if career.avg_salary is None:
            career.avg_salary = base_info.get("avg_salary")

        if career.has_scholarship_options is None:
            career.has_scholarship_options = base_info.get(
                "has_scholarship_options", False
            )

        # -----------------------------
        # Legacy category (OPTIONAL)
        # -----------------------------
        if career.category is None:
            career.category = base_info.get("category")

        # -----------------------------
        # Aptitude (AI-only signal)
        # -----------------------------
        if career.aptitude_vec is None and base_info.get("aptitude"):
            career.aptitude_vec = base_info["aptitude"]

        # -----------------------------
        # Profile vector (derived only)
        # -----------------------------
        if (
            career.profile_vec is None
            and career.ocean_vec is not None
            and career.riasec_vec is not None
        ):
            career.profile_vec = (
                list(career.ocean_vec) + list(career.riasec_vec)
            )

        db.add(career)
        db.flush()

        # -----------------------------
        # Translation description
        # -----------------------------
        if not translation.description:
            summary = base_info.get("summary") or base_info.get("description")
            if summary:
                translation.description = summary
                db.add(translation)

        db.flush()

    except Exception as e:
        logger.error(
            f"❌ Error storing base info for career_id={career.id}: {e}"
        )
        raise
