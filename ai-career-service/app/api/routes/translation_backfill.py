# app/api/routes/translation_step_backfill.py
from fastapi import APIRouter, BackgroundTasks
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.services.translation_step_backfill import run_step_note_backfill_background

router = APIRouter(prefix="/translate", tags=["translation-backfill"])

@router.post("/steps")
async def backfill_step_notes(background: BackgroundTasks):
    background.add_task(run_step_note_backfill_background)
    return {"status": "started"}
