from sqlalchemy import select
from app.db.models.career import Career
from app.services.translation_client import request_marathi_title_desc
from app.crud.crud_translation import upsert_career_translation

async def run_career_title_description_backfill(db):
    careers = db.execute(select(Career)).scalars().all()
    processed = 0

    for c in careers:

        if any(t.language == "mr" for t in c.translations):
            continue

        en_t = next((t for t in c.translations if t.language == "en"), None)
        if not en_t:
            continue

        # 👍 send title + desc to structured endpoint
        ai_res = await request_marathi_title_desc(
            career_id=c.id,
            title=en_t.title,
            description=en_t.description or ""
        )

        # 👍 FIXED KEY
        mr_title = ai_res["title"]
        mr_desc = ai_res["description"]

        upsert_career_translation(
            db=db,
            career_id=c.id,
            lang="mr",
            title=mr_title,
            description=mr_desc
        )

        db.commit()        # immediate save
        processed += 1

    return {"processed": processed, "status": "done"}
