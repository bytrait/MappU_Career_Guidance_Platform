from sqlalchemy.orm import Session
from app.db.models.career import (
    Career,
    CareerPath,
    CareerStep,
    CareerStepTranslation,
    CareerTranslation,
)
from app.services.ai_client import generate_single_stage_html
import logging

logger = logging.getLogger(__name__)

CARD_MARKERS = (
    'class="card"',
    "class='card'",
    'class="cards"',
    "class='cards'",
)


def has_card_content(html: str | None) -> bool:
    if not html:
        return False
    html = html.lower()
    return any(m in html for m in CARD_MARKERS)


def sync_stage_for_all_careers(
    *,
    db: Session,
    stage_number: int,
    language: str = "en",
    batch_size: int = 1,   # 🔒 safety valve
):
    """
    PRODUCTION-SAFE + DETERMINISTIC

    - Queries ONLY steps with given order
    - No full Career graph loading
    - Small commits (batch)
    - No lost updates
    """

    # --------------------------------------------------
    # 1. Get EXACT rows that can be updated
    # --------------------------------------------------
    rows = (
        db.query(
            Career.id.label("career_id"),
            Career.career_type,
            CareerStep.id.label("step_id"),
            CareerStep.type.label("step_type"),
            CareerStepTranslation.id.label("step_tr_id"),
            CareerStepTranslation.note,
            CareerTranslation.title.label("career_title"),
        )
        .join(CareerPath, CareerPath.career_id == Career.id)
        .join(CareerStep, CareerStep.path_id == CareerPath.id)
        .join(
            CareerTranslation,
            (CareerTranslation.career_id == Career.id)
            & (CareerTranslation.language == language),
        )
        .outerjoin(
            CareerStepTranslation,
            (CareerStepTranslation.step_id == CareerStep.id)
            & (CareerStepTranslation.language == language),
        )
        .filter(CareerStep.order == stage_number)
        .all()
    )

    total = len(rows)
    updated = 0
    skipped = 0

    logger.info(
        "🚀 Stage sync started | stage=%s | total_steps=%d",
        stage_number,
        total,
    )

    # --------------------------------------------------
    # 2. Process deterministically
    # --------------------------------------------------
    for idx, row in enumerate(rows, start=1):
        try:
            if not row.career_type:
                skipped += 1
                continue

            if has_card_content(row.note):
                skipped += 1
                continue

            html = generate_single_stage_html(
                career_name=row.career_title,
                stage_number=stage_number,
                grade="grade10",
                career_type=row.career_type,
            )

            if not html:
                skipped += 1
                continue

            if row.step_tr_id:
                db.query(CareerStepTranslation).filter(
                    CareerStepTranslation.id == row.step_tr_id
                ).update(
                    {"note": html},
                    synchronize_session=False,
                )
            else:
                db.add(
                    CareerStepTranslation(
                        step_id=row.step_id,
                        language=language,
                        title=row.step_type,
                        note=html,
                    )
                )

            updated += 1

            # -------------------------------
            # Batch commit (CRITICAL)
            # -------------------------------
            if updated % batch_size == 0:
                db.commit()
                logger.info(
                    "✅ Progress | updated=%d | skipped=%d | remaining=%d",
                    updated,
                    skipped,
                    total - idx,
                )

        except Exception:
            db.rollback()
            skipped += 1
            logger.exception(
                "❌ Failed career_id=%s step_id=%s",
                row.career_id,
                row.step_id,
            )

    db.commit()

    logger.info(
        "🎉 Stage sync completed | stage=%s | total=%d | updated=%d | skipped=%d",
        stage_number,
        total,
        updated,
        skipped,
    )

    return {
        "stage_number": stage_number,
        "total": total,
        "updated": updated,
        "skipped": skipped,
    }
