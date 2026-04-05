import asyncio
from ai.schemas.career_input import CareerInput
from ai.schemas.career_output import CareerOutput
from ai.nodes.generate_base import generate_base_info
from ai.nodes.generate_steps import generate_all_steps

async def generate_career(input_data: CareerInput) -> CareerOutput:
    """
    Orchestrates full career content generation:
    - Base info (description, costs, vectors) → independent of type
    - 8 career steps (depends on career type)
    """
    base_info = generate_base_info(input_data.career_title)

    # Run steps depending on career type
    steps = await generate_all_steps(
        career_title=input_data.career_title,
        career_type=input_data.career_type
    )

    # Wrap into CareerOutput
    return CareerOutput(
        career_id=input_data.career_id,
        base_info=base_info,
        steps=steps
    )
