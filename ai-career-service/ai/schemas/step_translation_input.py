from pydantic import BaseModel
from typing import List, Optional

class CareerStepTranslationInput(BaseModel):
    step_id: int
    title: str
    note: Optional[str] = None
    target_language: str = "mr"

class BatchCareerStepTranslationInput(BaseModel):
    items: List[CareerStepTranslationInput]
