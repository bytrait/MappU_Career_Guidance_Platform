from fastapi import APIRouter, BackgroundTasks,HTTPException
from app.services.backfill_career_stages import run_career_stage_backfill
import asyncio

from app.db.session import SessionLocal
from app.services.step_sync_service import sync_stage_for_all_careers

router = APIRouter(prefix="/admin", tags=["Automation"])

@router.post("/backfill-stages")
async def trigger_stage_generation(background_tasks: BackgroundTasks):
    background_tasks.add_task(asyncio.run, run_career_stage_backfill())
    return {"status": "started", "message": "8-stage backfill process started."}

def run_stage_sync_background(stage_number: int):
    """
    Background task runner.
    Own DB session (DO NOT reuse request session).
    """
    db = SessionLocal()
    try:
        sync_stage_for_all_careers(
            db=db,
            stage_number=stage_number,
            language="en",
        )
    finally:
        db.close()


@router.post("/careers/steps/sync")
def sync_career_stage_api(
    payload: dict,
    background_tasks: BackgroundTasks,
):
    """
    Production-safe async trigger.

    Input:
    {
      "stage_number": 7
    }
    """

    stage_number = payload.get("stage_number")

    if not stage_number or not isinstance(stage_number, int):
        raise HTTPException(
            status_code=400,
            detail="stage_number (int) is required",
        )

    # Run in background
    background_tasks.add_task(
        run_stage_sync_background,
        stage_number,
    )

    return {
        "success": True,
        "message": f"Stage {stage_number} sync started in background",
    }