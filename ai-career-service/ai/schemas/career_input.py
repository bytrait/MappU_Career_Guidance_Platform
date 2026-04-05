from pydantic import BaseModel, Field
from typing import Union

class CareerInput(BaseModel):
    """
    Input schema for AI generation.
    This is what we pass into the AI module when generating career content.
    """
    career_id: Union[int, str] = Field(..., description="DB primary key (int or uuid) used for storing results.")
    career_title: str = Field(..., description="Career title string passed into the LLM prompt (e.g. 'Software Developer').")
    career_type: str = Field(..., description="Career type: 'professional' or 'vocational'. Determines which prompt to use.")
