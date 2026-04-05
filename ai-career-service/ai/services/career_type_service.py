from langchain_mistralai import ChatMistralAI
from ai.prompts.career_type_prompt import career_type_prompt, career_type_parser
from ai.schemas.career_type_output import CareerTypeOutput
from typing import List
from ai.config import settings
# Initialize LLM
llm = ChatMistralAI(model="open-mistral-7b", temperature=0, mistral_api_key=settings.mistral_api_key)

async def classify_single_career(career: dict) -> CareerTypeOutput:
    """
    Classify a single career into professional or vocational.
    Career dict should have: title, eligibility, steps, min_cost, avg_cost, max_cost
    """
    prompt = career_type_prompt.format(
        id=career.get("id"),
        title=career.get("title")
    )

    response = await llm.ainvoke(prompt)
    return career_type_parser.parse(response.content)


async def classify_batch_careers(careers: List[dict]) -> List[CareerTypeOutput]:
    """
    Classify multiple careers in batch.
    """
    results = []
    for career in careers:
        result = await classify_single_career(career)
        results.append(result)
    return results
