from typing import Optional, Sequence
from sqlalchemy.orm import Session
from sqlalchemy.exc import SQLAlchemyError
from app.db.models import career as models
from app.schemas import career as schemas
from ai.schemas.career_output import CareerOutput
from typing import List
from sqlalchemy import text
from app.db.models.career import Career, CareerPath, CareerStep
from sqlalchemy import select, func
from sqlalchemy.orm import Session, selectinload





class CareerRepository:

    @staticmethod
    def get_careers_with_steps(db: Session, page: int, limit: int):
        offset = (page - 1) * limit

        # Total count
        total = db.scalar(select(func.count()).select_from(Career))

        # Main query
        careers = (
            db.execute(
                select(Career)
                .options(
                    # Load career translations
                    selectinload(Career.translations),

                    # Load paths → steps → step translations
                    selectinload(Career.paths)
                        .selectinload(CareerPath.steps)
                        .selectinload(CareerStep.translations),
                )
                .offset(offset)
                .limit(limit)
            )
        ).scalars().all()

        return total, careers
    
    
    @staticmethod
    def list_titles(db: Session, page: int, limit: int):
        offset = (page - 1) * limit

        total = db.scalar(select(func.count()).select_from(Career))

        careers = (
            db.execute(
                select(Career)
                .options(
                    selectinload(Career.translations)   # only translations, nothing else
                )
                .offset(offset)
                .limit(limit)
            )
        ).scalars().all()

        return total, careers
    
    @staticmethod
    def get_detail(db: Session, career_id: int):
        query = (
            db.execute(
                select(Career)
                .where(Career.id == career_id)
                .options(
                    selectinload(Career.translations),

                    # Load paths → steps → step translations
                    selectinload(Career.paths)
                        .selectinload(CareerPath.steps)
                        .selectinload(CareerStep.translations)
                )
            )
        ).scalar_one_or_none()

        return query


# ---------- small helpers ----------
def _concat(o: Optional[Sequence[float]], r: Optional[Sequence[float]]) -> Optional[list[float]]:
    """Concatenate OCEAN(5) + RIASEC(6) when both are present; else None."""
    if o and r:
        return list(o) + list(r)
    return None


# -------------------- CREATE --------------------
def create_career(db: Session, career: schemas.CareerCreate):
    """
    Creates a Career with nested translations/paths/steps/scholarships.
    Uses new vector fields riasec_vec, ocean_vec, profile_vec.
    If profile_vec isn't provided but both vectors are present, we compute it.
    """
    # Build vectors (schema already maps legacy riasac_score -> riasec_vec)
    riasec_vec = career.riasec_vec
    ocean_vec = career.ocean_vec
    profile_vec = career.profile_vec or _concat(ocean_vec, riasec_vec)

    try:
        # Create Career row
        db_career = models.Career(
            category=career.category,
            min_cost=career.min_cost,
            avg_cost=career.avg_cost,
            high_cost=career.high_cost,
            has_scholarship_options=career.has_scholarship_options,
            job_opportunities=career.job_opportunities,
            avg_salary=career.avg_salary,
            riasec_vec=riasec_vec,
            ocean_vec=ocean_vec,
            profile_vec=profile_vec,
        )
        db.add(db_career)
        db.flush()  # to get db_career.id

        # Career Translations
        for t in career.translations:
            db.add(models.CareerTranslation(
                title=t.title,
                description=t.description,
                language=t.language,
                career_id=db_career.id,
            ))

        # Career Paths (+ nested)
        for path in career.paths:
            db_path = models.CareerPath(
                name=path.name,
                career_id=db_career.id,
            )
            db.add(db_path)
            db.flush()  # to get db_path.id

            # Path Translations
            for pt in path.translations:
                db.add(models.CareerPathTranslation(
                    name=pt.name,
                    language=pt.language,
                    path_id=db_path.id,
                ))

            # Steps (+ nested)
            for step in path.steps:
                db_step = models.CareerStep(
                    order=step.order,
                    type=step.type,
                    duration_years=step.duration_years,
                    cost_range=step.cost_range,
                    note=step.note,
                    path_id=db_path.id,
                )
                db.add(db_step)
                db.flush()  # to get db_step.id

                # Step Translations
                for st in step.translations:
                    db.add(models.CareerStepTranslation(
                        title=st.title,
                        note=st.note,
                        language=st.language,
                        step_id=db_step.id,
                    ))

                # Scholarships (+ nested)
                for s in step.scholarships:
                    db_sch = models.Scholarship(
                        coverage=s.coverage,
                        link=s.link,
                        step_id=db_step.id,
                    )
                    db.add(db_sch)
                    db.flush()  # to get db_sch.id

                    for st in s.translations:
                        db.add(models.ScholarshipTranslation(
                            name=st.name,
                            description=st.description,
                            eligibility=st.eligibility,
                            language=st.language,
                            scholarship_id=db_sch.id,
                        ))

        db.commit()
        db.refresh(db_career)
        return db_career

    except SQLAlchemyError:
        db.rollback()
        raise


# -------------------- UPDATE (useful for PATCH/PUT) --------------------
def update_career(db: Session, career_id: int, payload: schemas.CareerUpdate):
    """
    Partial update of core fields + vectors.
    If profile_vec isn't provided but vectors are updated, recompute it.
    (Nested updates for translations/paths/steps are out of scope here.)
    """
    db_career = db.query(models.Career).filter(models.Career.id == career_id).first()
    if not db_career:
        return None

    # Scalar fields
    for attr in (
        "category",
        "min_cost",
        "avg_cost",
        "high_cost",
        "has_scholarship_options",
        "job_opportunities",
        "avg_salary",
    ):
        val = getattr(payload, attr, None)
        if val is not None:
            setattr(db_career, attr, val)

    # Vector fields
    riasec_vec = payload.riasec_vec if payload.riasec_vec is not None else db_career.riasec_vec
    ocean_vec = payload.ocean_vec if payload.ocean_vec is not None else db_career.ocean_vec

    # If profile explicitly provided, use it; otherwise recompute when both parts are known
    if payload.profile_vec is not None:
        db_career.profile_vec = list(payload.profile_vec)
    else:
        maybe_profile = _concat(ocean_vec, riasec_vec)
        if maybe_profile:
            db_career.profile_vec = maybe_profile

    # Persist any provided vectors
    if payload.riasec_vec is not None:
        db_career.riasec_vec = list(payload.riasec_vec)
    if payload.ocean_vec is not None:
        db_career.ocean_vec = list(payload.ocean_vec)

    try:
        db.commit()
        db.refresh(db_career)
        return db_career
    except SQLAlchemyError:
        db.rollback()
        raise

def get_unclassified_careers(db: Session, limit: Optional[int] = None) -> List[models.Career]:
    """
    Return careers where career_type IS NULL (unclassified).
    """
    query = db.query(models.Career).filter(models.Career.career_type.is_(None))
    if limit:
        query = query.limit(limit)
    return query.all()

def update_career_type(db: Session, career_id: int, career_type: str):
    career = db.query(models.Career).filter(models.Career.id == career_id).first()
    if not career:
        return None
    career.career_type = career_type
    db.commit()
    db.refresh(career)
    return career

def bulk_update_career_types(db: Session, updates: List[dict]):
    """
    updates = [{ "id": int, "career_type": "professional" | "vocational" }, ...]
    Commits once for the whole batch.
    """
    if not updates:
        return

    ids = [u["id"] for u in updates]
    # load matching careers in one query
    careers = db.query(models.Career).filter(models.Career.id.in_(ids)).all()
    career_map = {c.id: c for c in careers}
    for u in updates:
        c = career_map.get(u["id"])
        if c:
            c.career_type = u["career_type"]
    db.commit()
# -------------------- READ --------------------
def get_career(db: Session, career_id: int):
    return db.query(models.Career).filter(models.Career.id == career_id).first()


def get_careers(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Career).offset(skip).limit(limit).all()



def get_incomplete_careers(db: Session, limit: int = 50):
    """
    Fetch careers with missing description.
    """
    return (
        db.query(models.Career, models.CareerTranslation)
        .join(models.CareerTranslation)
        .filter(models.CareerTranslation.language == "en")
        .filter(models.CareerTranslation.description.is_(None))
        .limit(limit)
        .all()
    )
    
def get_all_incomplete_career_ids(db: Session):
    """
    Return list of (career_id, title) for all careers missing description.
    """
    rows = (
        db.query(models.Career.id, models.CareerTranslation.title)
        .join(models.CareerTranslation)
        .filter(models.CareerTranslation.language == "en")
        .filter(models.CareerTranslation.description.is_(None))
        .all()
    )
    return rows

def update_career_from_ai(db: Session, ai_result: dict | CareerOutput):
    """
    Update DB with AI-generated content.
    - Updates Career financials and vectors
    - Updates/creates CareerTranslation (EN)
    - Creates/updates a default CareerPath
    - Inserts CareerSteps + CareerStepTranslations
    """
    if isinstance(ai_result, CareerOutput):
        ai_result = ai_result.dict()

    career_id = ai_result["career_id"]
    base_info = ai_result["base_info"]
    steps = ai_result["steps"]

    # === 1. Update Career ===
    career = db.query(models.Career).filter(models.Career.id == career_id).first()
    if not career:
        return None

    # career.category = base_info.get("category", career.category or "General")
    career.min_cost = base_info.get("min_cost")
    career.avg_cost = base_info.get("avg_cost")
    career.high_cost = base_info.get("high_cost")
    career.riasec_vec = base_info.get("riasec")
    career.ocean_vec = base_info.get("ocean")

    # profile_vec = OCEAN (5) + RIASEC (6) → 11-dim
    if base_info.get("ocean") and base_info.get("riasec"):
        career.profile_vec = base_info["ocean"] + base_info["riasec"]

    # === 2. Update CareerTranslation (EN) ===
    translation = (
        db.query(models.CareerTranslation)
        .filter(models.CareerTranslation.career_id == career_id)
        .filter(models.CareerTranslation.language == "en")
        .first()
    )
    if not translation:
        translation = models.CareerTranslation(
            career_id=career_id,
            language="en",
            title="",  # Keep empty since only description is AI-generated
        )
        db.add(translation)
    translation.description = base_info.get("description")

    # === 3. Ensure CareerPath exists ===
    path = (
        db.query(models.CareerPath)
        .filter(models.CareerPath.career_id == career_id)
        .first()
    )
    if not path:
        path = models.CareerPath(career_id=career_id, name="default")
        db.add(path)
        db.flush()  # get path.id

    # === 4. Clear old steps ===
    db.query(models.CareerStep).filter(models.CareerStep.path_id == path.id).delete()
    db.flush()

    # === 5. Insert new steps ===
    for step in steps:
        step_obj = models.CareerStep(
            path_id=path.id,
            order=step["order"],
            type="auto",  # TODO: map from order → "education", "exam", etc.
            duration_years=step.get("duration_years"),
            cost_range=step.get("cost_range"),
            note=step.get("description"),
        )
        db.add(step_obj)
        db.flush()  # assign step.id

        # Add step translation
        step_tr = models.CareerStepTranslation(
            step_id=step_obj.id,
            language="en",
            title=step["title"],
            note=step.get("description"),
        )
        db.add(step_tr)

    # === 6. Commit and refresh ===
    db.commit()
    db.refresh(career)
    return career

def get_incomplete_careers_chunk(db: Session, offset: int, limit: int):
    return (
        db.query(models.Career.id, models.Career.career_type, models.CareerTranslation.title)
        .join(models.CareerTranslation)
        .filter(models.CareerTranslation.language == "en")
        .filter(models.CareerTranslation.description.is_(None))
        .offset(offset)
        .limit(limit)
        .all()
    )

def count_incomplete_careers(db: Session) -> int:
    """
    Count how many careers are still incomplete.
    """
    return (
        db.query(models.Career)
        .join(models.CareerTranslation)
        .filter(models.CareerTranslation.language == "en")
        .filter(models.CareerTranslation.description.is_(None))
        .count()
    )
def recommend_careers(
    db: Session,
    profile_vec: List[float],
    career_type: str,
    limit: int = 10,
) -> List[dict]:
    """
    Return top `limit` careers of `career_type`, ordered by similarity desc.
    similarity is percentage (0-100), rounded to 2 decimals.
    """
    # Normalize career type
    career_type_norm = (career_type or "").lower().strip()

    # Keep floats as-is to match DB
    vec_str = "[" + ",".join(str(x) for x in profile_vec) + "]"

    sql = text("""
        SELECT 
            id, 
            category, 
            career_type, 
            avg_cost, 
            avg_salary,
            ROUND(((1 - (profile_vec <=> :vec)) * 100)::numeric, 2) AS similarity
        FROM careers
        WHERE lower(career_type) LIKE :career_type
        ORDER BY profile_vec <=> :vec
        LIMIT :limit
    """)

    # Use wildcard matching to ignore spaces/casing differences
    result = db.execute(
        sql,
        {"career_type": f"%{career_type_norm}%", "limit": limit, "vec": vec_str}
    ).mappings().all()

    print(result)
    return [dict(r) for r in result]