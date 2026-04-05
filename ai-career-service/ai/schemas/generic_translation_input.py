# ai/schemas/generic_translation_input.py
from pydantic import BaseModel
from typing import List, Optional

class GenericTranslationInput(BaseModel):
    entity: str              # "career" | "step"
    entity_id: int
    title: str
    description: Optional[str] = None
    target_language: str = "mr"

class BatchGenericTranslationInput(BaseModel):
    items: List[GenericTranslationInput]
