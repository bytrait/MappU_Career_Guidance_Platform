from pydantic import BaseModel
from typing import List,Union


class CareerRequest(BaseModel):
    id: Union[int, str]
    title: str

class CareerBatchRequest(BaseModel):
    careers: List[CareerRequest]
