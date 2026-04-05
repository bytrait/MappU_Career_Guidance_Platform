from app.db.session import db_session
from app.db.models.career import Career
from app.crud.crud_translation import translation_crud
from app.services.ai_client import translate_title_via_ai

async def backfill_marathi_titles():
    careers = db_session.query(Career).all()
    count = 0

    for c in careers:
        # Skip if already translated
        has_mr = any(t.language == "mr" for t in c.translations)
        if has_mr:
            continue

        marathi = await translate_title_via_ai(c.career_type)

        translation_crud.upsert(
            db=db_session,
            career_id=c.id,
            language="mr",
            title=marathi,
            description=None
        )

        count += 1

    return count
