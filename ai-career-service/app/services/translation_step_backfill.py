# app/services/translation_step_backfill.py

import asyncio
import re
import logging
from typing import List
from sqlalchemy import select

from app.db.session import SessionLocal
from app.db.models.career import CareerStepTranslation
from app.services.translation_client import translate_note_via_ai
from app.crud.crud_step_translation import upsert_step_translation


# ------------------ LOGGING ------------------

logger = logging.getLogger(__name__)


# ------------------ CONFIG ------------------

CONCURRENCY = 1

CARD_REGEX = re.compile(
    r'class\s*=\s*["\']cards?["\']',
    re.IGNORECASE
)


# ------------------ HELPERS ------------------

def has_card_structure(note: str | None) -> bool:
    if not note:
        return False
    return bool(CARD_REGEX.search(note))


# ------------------ CORE LOGIC ------------------

async def translate_single_step(db, en_row: CareerStepTranslation) -> str:
    """
    Translate one English step note to Marathi.
    """
    step_id = en_row.step_id
    english_title = en_row.title or ""
    english_note = (en_row.note or "").strip()

    if not english_note:
        logger.debug(
            "SKIP | step_id=%s | reason=empty_english_note",
            step_id
        )
        return "skip"

    existing_mr = db.query(CareerStepTranslation).filter(
        CareerStepTranslation.step_id == step_id,
        CareerStepTranslation.language == "mr"
    ).first()

    if existing_mr and has_card_structure(existing_mr.note):
        logger.debug(
            "SKIP | step_id=%s | reason=valid_marathi_exists",
            step_id
        )
        return "skip"

    logger.info(
        "REGENERATE | step_id=%s | reason=%s",
        step_id,
        "missing_mr" if not existing_mr else "broken_mr"
    )

    try:
        mr_note = await translate_note_via_ai(step_id, english_note)
    except Exception as exc:
        logger.exception(
            "AI_ERROR | step_id=%s | error=%s",
            step_id,
            str(exc)
        )
        return "error"

    if not mr_note or not mr_note.strip():
        logger.warning(
            "SKIP | step_id=%s | reason=empty_ai_response",
            step_id
        )
        return "skip"

    upsert_step_translation(
        db=db,
        step_id=step_id,
        lang="mr",
        title=english_title,
        note=mr_note.strip()
    )

    logger.info(
        "DONE | step_id=%s | action=mr_upserted",
        step_id
    )

    return "done"


async def run_step_note_backfill_inner(db) -> dict:
    """
    Core backfill routine.
    """
    logger.info("STEP_BACKFILL_START")

    rows: List[CareerStepTranslation] = db.execute(
        select(CareerStepTranslation).where(
            CareerStepTranslation.language == "en"
        )
    ).scalars().all()

    total = len(rows)
    logger.info("FOUND_EN_STEPS | count=%s", total)

    if not rows:
        logger.info("STEP_BACKFILL_EMPTY")
        return {
            "processed": 0,
            "skipped": 0,
            "errors": 0,
            "status": "done"
        }

    sem = asyncio.Semaphore(CONCURRENCY)
    processed = skipped = errors = 0

    async def limited(en_row):
        async with sem:
            try:
                return await translate_single_step(db, en_row)
            except Exception:
                logger.exception(
                    "UNEXPECTED_ERROR | step_id=%s",
                    en_row.step_id
                )
                return "error"

    tasks = [asyncio.create_task(limited(r)) for r in rows]

    for coro in asyncio.as_completed(tasks):
        result = await coro

        if result == "done":
            try:
                db.commit()
                processed += 1
            except Exception as exc:
                db.rollback()
                errors += 1
                logger.exception(
                    "DB_COMMIT_FAILED | error=%s",
                    str(exc)
                )

        elif result == "skip":
            skipped += 1

        else:
            errors += 1

    logger.info(
        "STEP_BACKFILL_DONE | processed=%s | skipped=%s | errors=%s",
        processed,
        skipped,
        errors
    )

    return {
        "processed": processed,
        "skipped": skipped,
        "errors": errors,
        "status": "done"
    }


# ------------------ BACKGROUND ENTRYPOINT ------------------

async def run_step_note_backfill_background():
    """
    Background-safe entrypoint.
    """
    logger.info("STEP_BACKFILL_BACKGROUND_START")

    db = SessionLocal()
    try:
        result = await run_step_note_backfill_inner(db)
        logger.info(
            "STEP_BACKFILL_BACKGROUND_DONE | result=%s",
            result
        )
        return result
    finally:
        try:
            db.close()
            logger.debug("DB_SESSION_CLOSED")
        except Exception:
            logger.exception("DB_SESSION_CLOSE_FAILED")
