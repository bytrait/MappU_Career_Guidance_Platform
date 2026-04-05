from fastapi import APIRouter
from app.api.routes import career
from app.api.routes import translation
from app.api.routes import backfill_base_info
from app.api.routes import backfill_career_stages
from app.api.routes import translation_backfill


api_router = APIRouter()
api_router.include_router(career.router)
api_router.include_router(translation.router)
api_router.include_router(backfill_base_info.router)
api_router.include_router(backfill_career_stages.router)
api_router.include_router(translation_backfill.router)

