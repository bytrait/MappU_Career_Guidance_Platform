from fastapi import FastAPI
from ai.schemas.career_input import CareerInput
from ai.schemas.career_output import CareerOutput
from ai.services.career_generator import generate_career
from ai.services.batch_generator import generate_batch
from ai.services.translation_service import TranslationService
from ai.services.career_type_service import classify_single_career, classify_batch_careers
from typing import List

import asyncio

from ai.schemas.generic_translation_input import GenericTranslationInput, BatchGenericTranslationInput
from ai.schemas.generic_translation_output import GenericTranslationOutput
from ai.schemas.career_type_input import CareerRequest, CareerBatchRequest

app = FastAPI(title="AI Career Service", version="1.0.0")

translator = TranslationService()

@app.post("/generate-career", response_model=CareerOutput)
async def generate_career_endpoint(career: CareerInput):
    """
    Generate content for a single career.
    """
    return await generate_career(career)

@app.post("/generate-batch", response_model=List[CareerOutput])
async def generate_batch_endpoint(careers: List[CareerInput]):
    """
    Generate content for multiple careers in parallel.
    """
    return await generate_batch(careers, concurrency=5)

@app.post("/translate", response_model=GenericTranslationOutput)
async def translate_endpoint(item: GenericTranslationInput):
    """
    Translate a single entity (career or step).
    """
    return translator.translate(item)

@app.post("/translate-batch", response_model=List[GenericTranslationOutput])
async def translate_batch_endpoint(data: BatchGenericTranslationInput):
    """
    Translate multiple entities in parallel.
    """
    print(data.items)
    return await translator.translate_batch(data.items, concurrency=5)

@app.post("/classify-career")
async def classify_career(career: CareerRequest):
    result = await classify_single_career(career.dict())
    return result.dict()


@app.post("/classify-careers-batch")
async def classify_careers_batch(batch: CareerBatchRequest):
    results = await classify_batch_careers([c.dict() for c in batch.careers])
    return [r.dict() for r in results]