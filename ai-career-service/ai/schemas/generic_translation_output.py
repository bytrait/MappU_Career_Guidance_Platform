# ai/schemas/generic_translation_output.py
from pydantic import BaseModel
from typing import Optional

class   GenericTranslationOutput(BaseModel):
    entity: str
    entity_id: int
    title: str
    description: Optional[str] = None
