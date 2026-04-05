from typing import List, Optional, Union
from pydantic import BaseModel, Field, conlist


class CareerBaseInfo(BaseModel):
    """
    Core structured information about a career.
    This corresponds to fields in Career + CareerTranslation tables.
    """

    description: str = Field(
        ...,
        description="details description of the career (4–6 sentences) summarizing the role, "
                    "key responsibilities, and impact."
    )
    
    category: Optional[str] = Field("General", description="Career category or field (e.g. 'Technology', 'Healthcare').")

    min_cost: Optional[float] = Field(
        None,
        description="Minimum estimated cost (in USD) for education/training required for this career."
    )
    avg_cost: Optional[float] = Field(
        None,
        description="Average estimated cost (in USD) for education/training required for this career."
    )
    high_cost: Optional[float] = Field(
        None,
        description="Maximum estimated cost (in USD) for education/training required for this career."
    )

    riasec: conlist(float, min_items=6, max_items=6) = Field(
        ...,
        description="RIASEC profile represented as 6 numeric values in order: "
                    "[Realistic, Investigative, Artistic, Social, Enterprising, Conventional]. "
                    "Each value should be a score between 0–10."
    )

    ocean: conlist(float, min_items=5, max_items=5) = Field(
        ...,
        description="OCEAN personality profile represented as 5 numeric values in order: "
                    "[Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism]. "
                    "Each value should be a score between 0–10."
    )


class CareerStep(BaseModel):
    order: int = Field(..., description="Step order (1–8). Must be unique and sequential.")
    title: str = Field(..., description="Step title, concise, no numbering.")
    description: Optional[str] = Field(None, description="Explanation or advice for this step. give detailed information.")


class CareerOutput(BaseModel):
    """
    Final AI-generated output for a career.
    Includes base info + ordered steps.
    """

    career_id: Union[int, str] = Field(
        ...,
        description="Unique career ID from the database. Can be integer or UUID."
    )

    base_info: CareerBaseInfo = Field(
        ...,
        description="Core career information including description, cost ranges, and personality scores."
    )

    steps: List[CareerStep] = Field(
        ...,
        description="Ordered list of exactly 8 career steps, where step 8 is a summary."
    )


class CareerStepsOutput(BaseModel):
    """
    AI-generated output containing exactly 8 steps for a career.
    """
    steps: conlist(CareerStep,min_items=8, max_items=8) = Field(
        ...,
        description="List of exactly 8 ordered steps for the career path. "
                    "Steps 1–7 are the main progression (education, exams, degrees, skills, salary, growth, pros/cons), "
                    "and step 8 is the final summary."
    )