from pydantic import BaseModel
from typing import Optional

class CareerStepTranslationOutput(BaseModel):
    step_id: int
    title: str
    note: Optional[str] = None
