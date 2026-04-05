from langchain_mistralai import ChatMistralAI
from ai.prompts.career_base import career_base_prompt, career_base_parser
from ai.schemas.career_output import CareerBaseInfo
from ai.config import settings
from ai.services.utils import retry_sync
from ai.services.json_utils import extract_json_block

# Configure LLM (Mistral)
llm = ChatMistralAI(
    model="open-mistral-7b",
    temperature=1.0,
    mistral_api_key=settings.mistral_api_key
)

def _call_llm(career_title: str) -> CareerBaseInfo:
    _input = career_base_prompt.format_prompt(career_title=career_title)
    output = llm.invoke(_input.to_string())
    cleaned = extract_json_block(output.content.strip())
    return career_base_parser.parse(cleaned)

def generate_base_info(career_title: str) -> CareerBaseInfo:
    """
    Generate career base info (description, costs, RIASEC, OCEAN)
    with retry logic and JSON cleaning.
    """
    return retry_sync(_call_llm, retries=2, delay=1.0, career_title=career_title)
