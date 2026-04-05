from fastapi import APIRouter, Depends, BackgroundTasks
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.services.translation_backfill import run_career_title_description_backfill

router = APIRouter(prefix="/translate", tags=["translation"])


def run_backfill_task(db: Session):
    """
    Wrapper function to run the backfill task.
    """
    import asyncio
    asyncio.run(run_career_title_description_backfill(db))


@router.post("/backfill")
async def backfill_all_marathi(background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    """
    Trigger Marathi title and description backfill for careers as a background task.
    """
    background_tasks.add_task(run_backfill_task, db)
    return {"status": "Backfill task started in the background"}
