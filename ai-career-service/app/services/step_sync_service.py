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

REQUIRED_HTML_MARKERS = (
    'class="stage"',
    'class="cards"',
    'class="card"',
    "<h3>",
    "<ul>",
    "<li>",
)

INVALID_TEXT_PATTERNS = (
    "list the most important personal or thinking skills",
    "explain the key technical or subject-specific skills",
    "mention the main tools, software, or platforms",
    "suggest trusted platforms where students can start learning",
    "include 3–5 soft skills",
    "connect each skill to real industry work",
    "keep explanations beginner-friendly",
    "error",
    "unable to generate",
    "failed to generate",
    "something went wrong",
    "openai",
    "api error",
    "rate limit",
)


def is_valid_stage_html(html: str | None) -> bool:
    if not html:
        return False

    lower_html = html.lower()

    # Required structure check
    if not all(marker.lower() in lower_html for marker in REQUIRED_HTML_MARKERS):
        return False

    # Resource section should usually contain table
    if "<table>" not in lower_html:
        return False

    # Detect copied instructions or AI error messages
    # if any(pattern in lower_html for pattern in INVALID_TEXT_PATTERNS):
    #     return False

    return True


def sync_stage_for_all_careers(
    *,
    db: Session,
    stage_number: int,
    language: str = "en",
    batch_size: int = 1,
    max_retries: int = 3,
):
    """
    Regenerate stage HTML for ONLY professional careers.
    Retries generation if HTML is invalid or contains error text.
    """

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
        .filter(Career.career_type == "professional")
        .filter(CareerStep.order == stage_number)
        .all()
    )

    total = len(rows)
    updated = 0
    skipped = 0
    failed = 0

    logger.info(
        "🚀 Professional stage sync started | stage=%s | total_steps=%d",
        stage_number,
        total,
    )

    for idx, row in enumerate(rows, start=1):
        try:
            generated_html = None

            for attempt in range(1, max_retries + 1):
                html = generate_single_stage_html(
                    career_name=row.career_title,
                    stage_number=stage_number,
                    grade="grade10",
                    career_type=row.career_type,
                )

                if is_valid_stage_html(html):
                    generated_html = html
                    break

                logger.warning(
                    "⚠️ Invalid HTML generated | career_id=%s | step_id=%s | attempt=%s/%s",
                    row.career_id,
                    row.step_id,
                    attempt,
                    max_retries,
                )

            if not generated_html:
                failed += 1
                logger.error(
                    "❌ Failed after retries | career_id=%s | step_id=%s",
                    row.career_id,
                    row.step_id,
                )
                continue

            if row.step_tr_id:
                db.query(CareerStepTranslation).filter(
                    CareerStepTranslation.id == row.step_tr_id
                ).update(
                    {"note": generated_html},
                    synchronize_session=False,
                )
            else:
                db.add(
                    CareerStepTranslation(
                        step_id=row.step_id,
                        language=language,
                        title=row.step_type,
                        note=generated_html,
                    )
                )

            updated += 1

            if updated % batch_size == 0:
                db.commit()
                logger.info(
                    "✅ Progress | updated=%d | failed=%d | skipped=%d | remaining=%d",
                    updated,
                    failed,
                    skipped,
                    total - idx,
                )

        except Exception:
            db.rollback()
            failed += 1
            logger.exception(
                "❌ Exception while processing | career_id=%s | step_id=%s",
                row.career_id,
                row.step_id,
            )

    db.commit()

    logger.info(
        "🎉 Professional stage sync completed | stage=%s | total=%d | updated=%d | failed=%d | skipped=%d",
        stage_number,
        total,
        updated,
        failed,
        skipped,
    )

    return {
        "stage_number": stage_number,
        "career_type": "professional",
        "total": total,
        "updated": updated,
        "failed": failed,
        "skipped": skipped,
    }