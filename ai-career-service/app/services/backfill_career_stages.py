# app/services/backfill_career_stages.py
import asyncio
import logging
from typing import List, Dict, Any
from sqlalchemy.orm import joinedload
from app.db.session import SessionLocal
from app.db.models.career import (
    Career,
    CareerPath,
    CareerPathTranslation,
    CareerStep,
    CareerStepTranslation,
    CareerTranslation,
)
from app.services.ai_client import fetch_career_stages
from app.core.config import settings

logger = logging.getLogger(__name__)

# concurrency: how many careers to process in parallel
MAX_CONCURRENT = int(getattr(settings, "BACKFILL_MAX_CONCURRENT", 2))


async def run_career_stage_backfill() -> Dict[str, Any]:
    """
    Main entrypoint: find careers without any paths and generate + store 8-stage content.
    Returns summary dict with per-career results.
    """
    logger.info("🧠 Starting AI 8-stage backfill...")
    # get list of candidate career IDs (simple, single-session read)
    session = SessionLocal()
    try:
        rows = (
            session.query(Career.id)
            .filter(~Career.paths.any())
            .all()
        )
        career_ids = [r[0] for r in rows]
    finally:
        session.close()

    if not career_ids:
        logger.info("✅ No careers pending 8-stage generation.")
        return {"status": "ok", "message": "No pending careers."}

    logger.info(f"🚀 Found {len(career_ids)} careers to process.")
    sem = asyncio.Semaphore(MAX_CONCURRENT)

    async def process_one(career_id: int) -> Dict[str, Any]:
        async with sem:
            db = SessionLocal()  # new session per career (safe for concurrency)
            try:
                # reload career with translations/paths
                career: Career = (
                    db.query(Career)
                    .options(joinedload(Career.translations), joinedload(Career.paths))
                    .filter(Career.id == career_id)
                    .one_or_none()
                )
                if not career:
                    logger.warning(f"Career id={career_id} disappeared, skipping.")
                    return {"career_id": career_id, "status": "skipped", "reason": "not found"}

                # double-check: skip if paths exist (guard for races)
                if career.paths and len(career.paths) > 0:
                    logger.info(f"Skipping career id={career_id} (already has paths).")
                    return {"career_id": career_id, "status": "skipped", "reason": "already has paths"}

                # get English translation title
                en_trans = next((t for t in career.translations if t.language == "en"), None)
                if not en_trans or not en_trans.title:
                    logger.warning(f"Skipping career id={career_id} — missing English title.")
                    return {"career_id": career_id, "status": "skipped", "reason": "missing title"}

                career_title = en_trans.title.strip()
                career_type = career.career_type  # Fetch the career_type attribute
                logger.info(f"⚙️ Generating 8-stage content for: {career_title} (id={career_id}, type={career_type})")

                # Pass career_type as a parameter to fetch_career_stages
                ai_resp = await fetch_career_stages(career_title, career_type=career_type)
                if not ai_resp:
                    raise ValueError("Empty AI response")

                # extract steps list robustly
                steps = _extract_steps_from_ai(ai_resp)
                if not steps:
                    raise ValueError("No steps found in AI response")

                _store_stages(db, career, en_trans, steps)
                db.commit()
                logger.info(f"✅ Stored 8-stage path for: {career_title}")
                return {"career": career_title, "status": "success"}
            except Exception as e:
                db.rollback()
                logger.exception(f"❌ Failed for career_id={career_id}: {e}")
                return {"career_id": career_id, "status": "failed", "error": str(e)}
            finally:
                db.close()

    tasks = [process_one(cid) for cid in career_ids]
    results = await asyncio.gather(*tasks)
    return {"status": "done", "results": results}


def _extract_steps_from_ai(ai_resp: Dict[str, Any]) -> List[Dict[str, Any]]:
    """
    Normalize AI response and return the 'steps' list.
    Expected shapes handled:
      - { "content": { "path": { "steps": [...] } } }
      - { "content": { "path": { "name": "...", "steps": [...] } } }
      - { "path": { "steps": [...] } }
      - { "steps": [...] } (root)
    """
    # try many common places
    if not isinstance(ai_resp, dict):
        return []

    # 1) top-level 'content' then 'path'
    content = ai_resp.get("content")
    if isinstance(content, dict):
        p = content.get("path") or content
        if isinstance(p, dict) and isinstance(p.get("steps"), list):
            return p["steps"]

    # 2) top-level 'path'
    p2 = ai_resp.get("path")
    if isinstance(p2, dict) and isinstance(p2.get("steps"), list):
        return p2["steps"]

    # 3) top-level 'steps'
    if isinstance(ai_resp.get("steps"), list):
        return ai_resp["steps"]

    # 4) sometimes returned under 'output' -> 'path'
    output = ai_resp.get("output")
    if isinstance(output, dict):
        p3 = output.get("path")
        if isinstance(p3, dict) and isinstance(p3.get("steps"), list):
            return p3["steps"]

    return []


def _store_stages(db, career: Career, en_translation: CareerTranslation, steps: List[Dict[str, Any]]):
    """
    Persist the AI 'steps' into:
      - CareerPath
      - CareerPathTranslation (en)
      - CareerStep
      - CareerStepTranslation (en)
    """
    try:
        # create path
        path_name = "AI Generated Career Path"
        path = CareerPath(career_id=career.id, name=path_name)
        db.add(path)
        db.flush()  # populate path.id

        # create path translation
        path_translation = CareerPathTranslation(
            path_id=path.id, language="en", name=f"{en_translation.title} - AI Career Path"
        )
        db.add(path_translation)
        db.flush()

        # sort steps by order if present
        try:
            sorted_steps = sorted(steps, key=lambda s: int(s.get("order", 999)))
        except Exception:
            sorted_steps = steps

        for idx, s in enumerate(sorted_steps, start=1):
            # step metadata
            step_type = (s.get("type") or "").strip() or f"stage_{idx}"
            step_title = (s.get("title") or "").strip() or f"Stage {idx}"
            step_content = s.get("content") or s.get("text") or s.get("note") or ""

            # create CareerStep (meta only)
            step = CareerStep(
                path_id=path.id,
                order=idx,
                type=step_type,
                duration_years=None,
                cost_range=None,
                note=None,  # store content in translations (multilingual)
            )
            db.add(step)
            db.flush()  # get step.id

            # create CareerStepTranslation (English)
            step_translation = CareerStepTranslation(
                step_id=step.id,
                language="en",
                title=step_title,
                note=step_content,
            )
            db.add(step_translation)

        # do not mutate existing CareerTranslation.title/description per your instruction
        db.flush()

    except Exception:
        logger.exception(f"Error while storing stages for career id={career.id}")
        raise
