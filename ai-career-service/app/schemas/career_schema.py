from typing import List, Optional, Dict
from pydantic import BaseModel


# -------------------------
# Step Translations
# -------------------------
class StepTranslation(BaseModel):
    id: int
    language: str
    title: str
    note: Optional[str]

    class Config:
        orm_mode = True


# -------------------------
# Steps
# -------------------------
class CareerStep(BaseModel):
    id: int
    order: int
    type: str
    duration_years: Optional[float]
    cost_range: Optional[str]
    note: Optional[str]
    translations: List[StepTranslation]

    class Config:
        orm_mode = True


# -------------------------
# Career Translations
# -------------------------
class CareerTranslation(BaseModel):
    id: int
    language: str
    title: str
    description: Optional[str]

    class Config:
        orm_mode = True


# -------------------------
# Career Base
# -------------------------
class CareerBaseInfo(BaseModel):
    min_cost: Optional[float]
    avg_cost: Optional[float]
    high_cost: Optional[float]
    avg_salary: Optional[float]
    has_scholarship_options: bool

    class Config:
        orm_mode = True


# -------------------------
# Career Response
# -------------------------
class CareerWithSteps(BaseModel):
    id: int
    category: Optional[str]
    career_type: Optional[str]

    base_info: CareerBaseInfo
    translations: List[CareerTranslation]
    steps: List[CareerStep]

    class Config:
        orm_mode = True


# -------------------------
# Pagination Wrapper
# -------------------------
class PaginatedCareerResponse(BaseModel):
    total: int
    page: int
    limit: int
    data: List[CareerWithSteps]




class CareerTitleItem(BaseModel):
    id: int
    titles: Dict[str, str]   # { "en": "Software Developer", "mr": "..." }

class PaginatedCareerTitleList(BaseModel):
    total: int
    page: int
    limit: int
    data: List[CareerTitleItem]


class StepTranslationSchema(BaseModel):
    id: int
    language: str
    title: str
    note: Optional[str]

class StepSchema(BaseModel):
    id: int
    order: int
    type: str
    duration_years: Optional[float]
    cost_range: Optional[str]
    note: Optional[str]
    translations: List[StepTranslationSchema]

class CareerTranslationSchema(BaseModel):
    id: int
    language: str
    title: str
    description: Optional[str]

class CareerDetailSchema(BaseModel):
    id: int
    category: Optional[str]
    career_type: Optional[str]

    base_info: Dict[str, Optional[float]]
    translations: List[CareerTranslationSchema]
    steps: List[StepSchema]
