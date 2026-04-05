# ai/schemas/translation_output.py
from pydantic import BaseModel

class CareerTranslationOutput(BaseModel):
    career_id: int
    title: str
    description: str
