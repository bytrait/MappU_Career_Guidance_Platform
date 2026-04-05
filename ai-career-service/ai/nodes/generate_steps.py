import json
from langchain.output_parsers import PydanticOutputParser
from langchain_mistralai import ChatMistralAI
from ai.prompts.steps import career_steps_prompt
from ai.prompts.vocational_career_steps import vocational_career_steps_prompt
from ai.schemas.career_output import CareerStepsOutput, CareerStep
from ai.config import settings

# -----------------------
# LLM Configuration
# -----------------------
llm = ChatMistralAI(
    model="open-mistral-7b",
    temperature=0.7,  # deterministic
    mistral_api_key=settings.mistral_api_key,
)

# -----------------------
# Output Parser
# -----------------------
career_steps_parser = PydanticOutputParser(pydantic_object=CareerStepsOutput)

# -----------------------
# Generate Steps
# -----------------------
async def generate_all_steps(career_title: str, career_type: str) -> list[CareerStep]:
    """
    Generate all 8 steps for a career in one LLM call.
    Uses the full prompt (professional or vocational) and parses with PydanticOutputParser.
    """
    # Select correct prompt depending on type
    if career_type.lower() == "vocational":
        selected_prompt = vocational_career_steps_prompt
    else:  # default to professional
        selected_prompt = career_steps_prompt

    # Format input
    _input = selected_prompt.format_prompt(career_title=career_title)

    # Call LLM
    output = await llm.ainvoke(_input.to_string())

    # Parse directly into CareerStepsOutput
    parsed: CareerStepsOutput = career_steps_parser.parse(output.content)

    return parsed.steps
