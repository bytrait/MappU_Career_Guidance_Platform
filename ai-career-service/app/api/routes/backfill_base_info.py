from fastapi import APIRouter, BackgroundTasks
from app.services.backfill_base_info import run_base_info_backfill
import asyncio

router = APIRouter(prefix="/admin", tags=["Automation"])


@router.post("/backfill-base-info")
async def trigger_base_info_backfill(background_tasks: BackgroundTasks):
    """
    Trigger AI Base Info generation for careers missing vector or cost data.
    """
    background_tasks.add_task(asyncio.run, run_base_info_backfill())
    return {"status": "started", "message": "Base info backfill process started."}
