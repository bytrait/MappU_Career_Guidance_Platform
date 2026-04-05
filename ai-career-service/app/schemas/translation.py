# app/schemas/translation.py
from pydantic import BaseModel
from typing import Optional

class TranslationCreate(BaseModel):
    entity: str                # "career" | "step"
    entity_id: int
    language: str              # "mr", "hi", etc.
    title: str
    description: Optional[str] = None
