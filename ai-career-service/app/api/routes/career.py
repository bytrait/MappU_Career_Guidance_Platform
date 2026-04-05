from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session, joinedload
from sqlalchemy import text
from collections import defaultdict
import random
from typing import List
from app.crud import crud_career as crud
from app.db.session import get_db
from app.schemas.career import Career, CareerCreate, CareerUpdate, CareerRecommendRequest
from app.db.models.career import Career as CareerModel
from app.db.models.career import CareerPath as CareerPathModel
from app.db.models.career import CareerStep as CareerStepModel
from app.db.models.career import Scholarship as ScholarshipModel
from app.services.ai_client import generate_batch
from app.services.backfill import backfill_careers
from app.services.ai_client import classify_career, classify_careers_batch
from app.crud.crud_career import update_career_type
from app.crud.crud_career import get_unclassified_careers, bulk_update_career_types
from typing import Optional
from app.services.recommendation_service import recommend_for_student

from app.schemas.career_schema import PaginatedCareerResponse, PaginatedCareerTitleList, CareerDetailSchema
from app.services.career_service import CareerService


router = APIRouter(tags=["Careers"])


@router.get("/titles", response_model=PaginatedCareerTitleList)
def list_career_titles(
    page: int = Query(1, ge=1),
    limit: int = Query(20, ge=1, le=100),
    db: Session = Depends(get_db)
):
    return CareerService.list_titles(db, page, limit)


@router.get("/details/{career_id}", response_model=CareerDetailSchema)
def get_career_details(career_id: int, db: Session = Depends(get_db)):
    return CareerService.get_detail(db, career_id)


@router.get("/", response_model=PaginatedCareerResponse)
def get_all_careers(
    page: int = Query(1, ge=1),
    limit: int = Query(20, ge=1, le=100),
    db: Session = Depends(get_db)
):
    return CareerService.list_careers(db, page, limit)

# -------------------- CREATE --------------------
@router.post("/", response_model=Career, status_code=201)
def create_career(career: CareerCreate, db: Session = Depends(get_db)):
    """
    Create a new career along with its translations, paths, steps, and scholarships.
    Writes vectors into riasec_vec/ocean_vec, and computes profile_vec when both exist.
    """
    return crud.create_career(db=db, career=career)


# -------------------- UPDATE (optional but handy) --------------------
@router.patch("/{career_id}", response_model=Career)
def update_career(career_id: int, payload: CareerUpdate, db: Session = Depends(get_db)):
    """
    Partial update; recomputes profile_vec if component vectors change and profile not provided.
    """
    updated = crud.update_career(db, career_id, payload)
    if not updated:
        raise HTTPException(status_code=404, detail="Career not found")
    return updated


# -------------------- READ ALL --------------------
@router.get("/", response_model=List[Career])
def read_careers(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    """
    Get a paginated list of careers.
    """
    return crud.get_careers(db, skip=skip, limit=limit)


# -------------------- READ ONE --------------------
@router.get("/{career_id}", response_model=Career)
def read_career(career_id: int, db: Session = Depends(get_db)):
    """
    Get a single career by ID (includes nested paths, steps, scholarships).
    """
    db_career = crud.get_career(db, career_id=career_id)
    if not db_career:
        raise HTTPException(status_code=404, detail="Career not found")
    return db_career


# -------------------- RECOMMEND CAREERS --------------------
from collections import defaultdict
import random
from app.schemas.career import RecommendationRequest

@router.post("/recommend", response_model=List[Career])
def recommend_careers(
    req: CareerRecommendRequest,
    db: Session = Depends(get_db),
):
    """
    Recommend top careers by cosine distance using pgvector.
    Adds diversity re-ranking to avoid biased clusters.
    """
    try:
        db.execute(text("SET LOCAL ivfflat.probes = :p"), {"p": 10})

        # Step 1: Pull more candidates (e.g., 3x top_k for re-ranking)
        fetch_limit = req.top_k * 3

        rows = []
        if req.use_profile:
            profile = req.user_ocean + req.user_riasec
            profile_vec = "[" + ",".join(str(float(x)) for x in profile) + "]"

            q = text("""
                SELECT id, category
                FROM careers
                WHERE profile_vec IS NOT NULL
                ORDER BY profile_vec <=> (:p)::vector
                LIMIT :k
            """)
            rows = db.execute(q, {"p": profile_vec, "k": fetch_limit}).fetchall()

        else:
            # existing branches (weighted, ocean-only, riasec-only) → same change
            # just SELECT id, category and use fetch_limit
            # For now, raise an error to avoid empty block
            raise HTTPException(status_code=400, detail="Non-profile-based recommendation not implemented")

        career_ids = [row.id for row in rows]
        if not career_ids:
            return []

        careers = (
            db.query(CareerModel)
            .options(
                joinedload(CareerModel.translations),
                joinedload(CareerModel.paths).joinedload(CareerPathModel.translations),
                joinedload(CareerModel.paths).joinedload(CareerPathModel.steps).joinedload(CareerStepModel.translations),
                joinedload(CareerModel.paths).joinedload(CareerPathModel.steps).joinedload(CareerStepModel.scholarships).joinedload(ScholarshipModel.translations),
            )
            .filter(CareerModel.id.in_(career_ids))
            .all()
        )

        id_to_obj = {c.id: c for c in careers}

        # Step 2: Re-rank with diversity
        category_buckets = defaultdict(list)
        for row in rows:
            if row.id in id_to_obj:
                category_buckets[row.category].append(id_to_obj[row.id])

        # Round-robin pick across categories
        ordered = []
        while len(ordered) < req.top_k and any(category_buckets.values()):
            for cat, bucket in list(category_buckets.items()):
                if bucket and len(ordered) < req.top_k:
                    ordered.append(bucket.pop(0))  # take best from each category

        return ordered

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"recommendation failed: {e}")


@router.post("/fill-missing")
async def fill_missing(db: Session = Depends(get_db), limit: int = 50):
    """
    Find careers missing content, generate with AI, and update DB.
    """
    incomplete = crud.get_incomplete_careers(db, limit=limit)

    careers_input = [
        {"career_id": c.Career.id, "career_title": c.CareerTranslation.title}
        for c in incomplete
    ]

    ai_results = await generate_batch(careers_input)

    for res in ai_results:
        crud.update_career_from_ai(db, res)

    return {"updated": len(ai_results)}


@router.post("/backfill")
async def backfill(db: Session = Depends(get_db), chunk_size: int = 50):
    """
    Resume-safe: process ALL incomplete careers in chunks.
    If interrupted, can be restarted and will continue where left off.
    """
    result = await backfill_careers(db, chunk_size=chunk_size)
    return result



@router.post("/classify-career/{career_id}")
async def classify_and_update_career(career_id: int, db: Session = Depends(get_db)):
    # get career from DB
    career = db.query(Career).filter(Career.id == career_id).first()
    if not career:
        return {"error": "Career not found"}

    result = await classify_career(career.id, career.translations[0].title)
    updated = update_career_type(db, career.id, result["career_type"])
    return {"id": updated.id, "career_type": updated.career_type}

@router.post("/classify-careers-batch")
async def classify_and_update_batch(
    chunk_size: int = 100,
    limit: Optional[int] = None,
    db: Session = Depends(get_db),
):
    careers = get_unclassified_careers(db, limit=limit)
    if not careers:
        return {"message": "No unclassified careers found", "processed": 0, "updated": [], "failed": []}

    total = len(careers)
    processed = 0
    all_updates: List[dict] = []
    failed_chunks: List[dict] = []

    for i in range(0, total, chunk_size):
        chunk = careers[i : i + chunk_size]
        payload = []
        for c in chunk:
            title = ""
            if getattr(c, "translations", None):
                try:
                    title = c.translations[0].title
                except Exception:
                    title = ""
            payload.append({"id": c.id, "title": title})

        try:
            # pass a slightly larger timeout for AI module (optional)
            ai_results = await classify_careers_batch(payload, timeout=180.0)
        except Exception as exc:
            # Log and record failure, but continue with next chunk.
            # Save failed ids so operator can retry later.
            failed_ids = [p["id"] for p in payload]
            failed_chunks.append({"start_index": i, "count": len(payload), "ids": failed_ids, "error": str(exc)})
            print(f"[classify-batch] chunk failed at index {i}: {str(exc)}")
            # optionally continue to next chunk
            continue

        # Persist results in DB
        try:
            bulk_update_career_types(db, ai_results)
        except Exception as db_exc:
            # If DB update fails, raise error (we might want to stop or log)
            raise HTTPException(status_code=500, detail=f"DB update failed for chunk starting at {i}: {str(db_exc)}")

        all_updates.extend(ai_results)
        processed += len(ai_results)
        print(f"[classify-batch] processed chunk {i//chunk_size + 1} — {len(ai_results)} careers")

    return {
        "processed": processed,
        "updated": all_updates,
        "failed_chunks": failed_chunks,
        "total_unclassified": total,
    }
    
    
@router.post("/recommend/v2")
def get_recommendations(req: RecommendationRequest, db: Session = Depends(get_db)):
    if not req.profile_vec or not isinstance(req.profile_vec, list):
        raise HTTPException(status_code=400, detail="profile_vec required as a list of floats")
    if len(req.profile_vec) < 1:
        raise HTTPException(status_code=400, detail="profile_vec must contain values")

    result = recommend_for_student(db, req.profile_vec, req.economic_status, req.language)
    return result