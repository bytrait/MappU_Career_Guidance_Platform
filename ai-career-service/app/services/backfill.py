from app.crud import crud_career
from app.services.ai_client import generate_batch
from sqlalchemy.orm import Session
from sqlalchemy import select
from app.db.models.career import Career
# from app.services.translation_client import request_marathi_translation
from app.crud.crud_translation import upsert_career_translation

async def backfill_careers(db: Session, chunk_size: int = 50):
    """
    Backfill ALL incomplete careers in chunks.
    Resumable: skips already filled ones.
    """
    total = crud_career.count_incomplete_careers(db)
    updated = 0
    chunk_num = 1

    while True:
        incomplete = crud_career.get_incomplete_careers_chunk(db, 0, chunk_size)
        if not incomplete:
            break  # all done

    
        print("incomplete:", incomplete)  # Debugging line to check the contents of incomplete
        careers_input = [
            {"career_id": c.id, "career_title": c.title,"career_type": c.career_type} for c in incomplete
        ]

        print(f"Processing chunk {chunk_num} ({len(careers_input)} careers)...")

        try:
            ai_results = await generate_batch(careers_input)
            for res in ai_results:
                crud_career.update_career_from_ai(db, res)
            updated += len(ai_results)
            print(f"✅ Chunk {chunk_num} complete ({len(ai_results)} updated).")
        except Exception as e:
            print(f"❌ Error in chunk {chunk_num}: {e}")
            break  # stop on error, can resume later

        chunk_num += 1

    remaining = crud_career.count_incomplete_careers(db)
    return {
        "total_initial": total,
        "updated": updated,
        "remaining": remaining
    }




# async def run_career_title_description_backfill(db):
    careers = db.execute(select(Career)).scalars().all()
    processed = 0

    for c in careers:
        # Skip if Marathi already exists
        existing = [t for t in c.translations if t.language == "mr"]
        if existing:
            continue

        # Translate via AI module
        ai_res = await request_marathi_translation(c.id, c.translations[0].title, c.translations[0].description)
        translated_content = ai_res["content"]

        # Split title + description
        if "DESCRIPTION:" in translated_content:
            parts = translated_content.split("DESCRIPTION:")
            mr_title = parts[0].replace("TITLE:", "").strip()
            mr_desc = parts[1].strip()
        else:
            mr_title = translated_content.strip()
            mr_desc = ""

        # Save
        upsert_career_translation(
            db=db,
            career_id=c.id,
            lang="mr",
            title=mr_title,
            description=mr_desc
        )

        processed += 1

    db.commit()

    return {"processed": processed, "status": "done"}