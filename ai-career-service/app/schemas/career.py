from typing import List, Optional, Tuple
from pydantic import BaseModel, validator, conlist, root_validator


# ---------- helpers ----------
VEC6 = conlist(float, min_items=6, max_items=6)  # RIASEC
VEC5 = conlist(float, min_items=5, max_items=5)  # OCEAN
VEC11 = conlist(float, min_items=11, max_items=11)  # PROFILE = OCEAN + RIASEC


def _concat(o: Optional[List[float]], r: Optional[List[float]]) -> Optional[List[float]]:
    return (o or []) + (r or []) if (o and r) else None


# -------------------- TRANSLATIONS --------------------
class TranslationBase(BaseModel):
    language: str


class CareerTranslationBase(TranslationBase):
    title: str
    description: Optional[str] = None


class CareerTranslationCreate(CareerTranslationBase):
    pass


class CareerTranslation(CareerTranslationBase):
    id: int

    class Config:
        orm_mode = True


class CareerPathTranslationBase(TranslationBase):
    name: str


class CareerPathTranslationCreate(CareerPathTranslationBase):
    pass


class CareerPathTranslation(CareerPathTranslationBase):
    id: int

    class Config:
        orm_mode = True


class CareerStepTranslationBase(TranslationBase):
    title: str
    note: Optional[str] = None


class CareerStepTranslationCreate(CareerStepTranslationBase):
    pass


class CareerStepTranslation(CareerStepTranslationBase):
    id: int

    class Config:
        orm_mode = True


class ScholarshipTranslationBase(TranslationBase):
    name: str
    description: Optional[str] = None
    eligibility: Optional[str] = None


class ScholarshipTranslationCreate(ScholarshipTranslationBase):
    pass


class ScholarshipTranslation(ScholarshipTranslationBase):
    id: int

    class Config:
        orm_mode = True


# -------------------- SCHOLARSHIPS --------------------
class ScholarshipBase(BaseModel):
    coverage: Optional[str] = None
    link: Optional[str] = None


class ScholarshipCreate(ScholarshipBase):
    translations: List[ScholarshipTranslationCreate] = []


class Scholarship(ScholarshipBase):
    id: int
    translations: List[ScholarshipTranslation] = []

    class Config:
        orm_mode = True


# -------------------- CAREER STEPS --------------------
class CareerStepBase(BaseModel):
    order: int
    type: str  # "education", "exam", "degree", "skill", "career"
    duration_years: Optional[float] = None
    cost_range: Optional[str] = None
    note: Optional[str] = None


class CareerStepCreate(CareerStepBase):
    translations: List[CareerStepTranslationCreate] = []
    scholarships: List[ScholarshipCreate] = []


class CareerStep(CareerStepBase):
    id: int
    translations: List[CareerStepTranslation] = []
    scholarships: List[Scholarship] = []

    class Config:
        orm_mode = True


# -------------------- CAREER PATHS --------------------
class CareerPathBase(BaseModel):
    name: str


class CareerPathCreate(CareerPathBase):
    steps: List[CareerStepCreate] = []
    translations: List[CareerPathTranslationCreate] = []


class CareerPath(CareerPathBase):
    id: int
    steps: List[CareerStep] = []
    translations: List[CareerPathTranslation] = []

    class Config:
        orm_mode = True


# -------------------- CAREERS --------------------
class CareerBase(BaseModel):
    category: Optional[str] = None
    min_cost: Optional[float] = None
    avg_cost: Optional[float] = None
    high_cost: Optional[float] = None
    has_scholarship_options: bool = False
    job_opportunities: Optional[str] = None
    avg_salary: Optional[float] = None


class CareerCreate(CareerBase):
    # New canonical vector fields
    riasec_vec: Optional[VEC6] = None
    ocean_vec: Optional[VEC5] = None

    # Back-compat: accept legacy field but map it to riasec_vec
    riasac_score: Optional[VEC6] = None

    # profile_vec is computed server-side if both vectors are present; allow override for power users
    profile_vec: Optional[VEC11] = None

    translations: List[CareerTranslationCreate] = []
    paths: List[CareerPathCreate] = []

    @root_validator(pre=True)
    def _backcompat_and_profile(cls, values):
        # prefer riasec_vec; if missing, fall back to legacy riasac_score
        if not values.get("riasec_vec") and values.get("riasac_score"):
            values["riasec_vec"] = values["riasac_score"]

        # if profile_vec not supplied, compute when we have both vectors
        if not values.get("profile_vec"):
            pv = _concat(values.get("ocean_vec"), values.get("riasec_vec"))
            if pv:
                values["profile_vec"] = pv
        return values

    @validator("profile_vec")
    def _ensure_profile_len(cls, v):
        # allow None or exact 11
        if v is None:
            return v
        if len(v) != 11:
            raise ValueError("profile_vec must be length 11 (OCEAN[5] + RIASEC[6])")
        return v


class CareerUpdate(CareerBase):
    # All optional for PATCH
    riasec_vec: Optional[VEC6] = None
    ocean_vec: Optional[VEC5] = None
    profile_vec: Optional[VEC11] = None

    # If profile not given, the service can recompute from provided pieces
    @root_validator(pre=True)
    def _maybe_rebuild_profile(cls, values):
        if not values.get("profile_vec"):
            pv = _concat(values.get("ocean_vec"), values.get("riasec_vec"))
            if pv:
                values["profile_vec"] = pv
        return values


class Career(CareerBase):
    id: int
    riasec_vec: Optional[List[float]] = None
    ocean_vec: Optional[List[float]] = None
    profile_vec: Optional[List[float]] = None
    translations: List[CareerTranslation] = []
    paths: List[CareerPath] = []

    class Config:
        orm_mode = True

    # Normalize DB-returned vector types (pgvector can come as memoryview)
    @validator("riasec_vec", "ocean_vec", "profile_vec", pre=True)
    def _normalize_vectors(cls, v):
        if v is None:
            return None
        if isinstance(v, (list, tuple)):
            return list(v)
        if isinstance(v, (bytes, bytearray, memoryview)):
            # You can plug a real decoder here if you ever see raw bytes;
            # most pgvector drivers map to Python lists already.
            return list(v)
        return list(v)


# -------------------- RECOMMENDATION REQUEST --------------------
class CareerRecommendRequest(BaseModel):
    # Provide either/both; service decides the query strategy
    user_riasec: Optional[VEC6] = None
    user_ocean: Optional[VEC5] = None

    # If both are present, you can either:
    # - use profile search (concat), or
    # - use weighted two-column re-rank (below)
    use_profile: bool = True

    # Only used when use_profile=False and both vectors present
    weight_riasec: float = 0.7
    weight_ocean: float = 0.3

    top_k: int = 5

    @root_validator
    def _at_least_one_vector(cls, values):
        if not values.get("user_riasec") and not values.get("user_ocean"):
            raise ValueError("Provide at least one of user_riasec or user_ocean.")
        if values.get("use_profile") and not (values.get("user_riasec") and values.get("user_ocean")):
            # If use_profile=True we require both to build the 11-dim vector.
            raise ValueError("use_profile=True requires both user_riasec and user_ocean.")
        return values

    def split(self) -> Tuple[Optional[List[float]], Optional[List[float]], Optional[List[float]]]:
        """Convenience for handlers: returns (ocean, riasec, profile)"""
        o = self.user_ocean
        r = self.user_riasec
        p = _concat(o, r) if (self.use_profile and o and r) else None
        return o, r, p


class RecommendationRequest(BaseModel):
    profile_vec: List[float]  # length 11 (OCEAN+RIASEC)
    economic_status: str      # "weak" | "stable"
    language: str = "en"             # default English, e.g. "mr", "hi"
