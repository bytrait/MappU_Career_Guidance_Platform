# app/api/routes/translation_backfill.py
from fastapi import APIRouter, BackgroundTasks
from app.services.translation_step_backfill import run_step_note_backfill_background

router = APIRouter(prefix="/translate/backfill", tags=["translation-backfill"])

@router.post("/steps")
async def backfill_step_notes(background: BackgroundTasks):
    """
    Start the step-note backfill in background (non-blocking).
    Returns immediately with status started.
    """
    background.add_task(run_step_note_backfill_background)
    return {"status": "started"}
