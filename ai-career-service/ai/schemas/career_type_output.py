from pydantic import BaseModel, Field
from typing import Union
class CareerTypeOutput(BaseModel):
    id:Union[int,str] = Field(..., description="DB primary key (int or uuid) used for storing results.")
    career_type: str = Field(
        description="Either 'professional' or 'vocational' depending on career requirements"
    )
