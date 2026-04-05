from sqlalchemy import select
from app.db.models.career import Career
from app.services.translation_client import request_marathi_translation
from app.crud.crud_translation import upsert_career_translation

async def run_career_title_description_backfill(db):
    result = await db.execute(select(Career))
    careers = result.scalars().all()

    processed = 0

    for c in careers:
        if any(t.language == "mr" for t in c.translations):
            continue

        en_t = c.translations[0]

        ai_res = await request_marathi_translation(
            c.id,
            en_t.title,
            en_t.description or ""
        )

        translated = ai_res["content"]

        if "DESCRIPTION:" in translated:
            title_part, desc_part = translated.split("DESCRIPTION:", 1)
            mr_title = title_part.replace("TITLE:", "").strip()
            mr_desc = desc_part.strip()
        else:
            mr_title = translated.strip()
            mr_desc = ""

        # ✅ FIX: MISSNG AWAIT — THIS WAS THE ERROR
        await upsert_career_translation(
            db=db,
            career_id=c.id,
            lang="mr",
            title=mr_title,
            description=mr_desc
        )

        processed += 1

    # synchronous commit — correct
    db.commit()

    return {"processed": processed, "status": "done"}
