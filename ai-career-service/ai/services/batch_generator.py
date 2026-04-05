import asyncio
from typing import List
from ai.schemas.career_input import CareerInput
from ai.schemas.career_output import CareerOutput
from ai.services.career_generator import generate_career

async def generate_batch(careers: List[CareerInput], concurrency: int = 5) -> List[CareerOutput]:
    """
    Generate career outputs for multiple careers in parallel.
    
    Args:
        careers: List of CareerInput
        concurrency: Max number of tasks running at once (to avoid rate limits)
    
    Returns:
        List of CareerOutput
    """
    semaphore = asyncio.Semaphore(concurrency)

    async def _worker(career: CareerInput) -> CareerOutput:
        async with semaphore:
            return await generate_career(career)

    tasks = [_worker(c) for c in careers]
    results = await asyncio.gather(*tasks, return_exceptions=True)

    # Handle failures gracefully
    outputs = []
    for career, result in zip(careers, results):
        if isinstance(result, Exception):
            print(f"❌ Failed for {career.career_title}: {result}")
        else:
            outputs.append(result)
    return outputs
