# ai/schemas/translation_input.py
from pydantic import BaseModel
from typing import List

class CareerTranslationInput(BaseModel):
    career_id: int
    title: str
    description: str
    target_language: str = "mr"

class BatchCareerTranslationInput(BaseModel):
    items: List[CareerTranslationInput]
