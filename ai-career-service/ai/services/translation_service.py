# ai/services/translation_service.py
from langchain.prompts import PromptTemplate
from langchain_mistralai import ChatMistralAI
from langchain.output_parsers import PydanticOutputParser
from pydantic import BaseModel
from ai.schemas.generic_translation_input import GenericTranslationInput
from ai.schemas.generic_translation_output import GenericTranslationOutput
from ai.prompts.generic_translation import GENERIC_TRANSLATION_PROMPT
from ai.config import settings
from typing import List, Optional, Union
import asyncio, functools, json

class RawGenericTranslation(BaseModel):
    title: str
    # Allow description to be either a string or a dict
    description: Optional[Union[str, dict]] = None

class TranslationService:
    def __init__(self, model_name="mistral-small-latest"):
        self.llm = ChatMistralAI(
            model=model_name,
            temperature=0.3,
            mistral_api_key=settings.mistral_api_key,
            # Disable LangSmith client/tracing to avoid rate limits
            client=None
        )
        self.parser = PydanticOutputParser(pydantic_object=RawGenericTranslation)
        self.prompt = PromptTemplate(
            template=GENERIC_TRANSLATION_PROMPT,
            input_variables=["title", "description"],
            partial_variables={"format_instructions": self.parser.get_format_instructions()},
        )
        self.chain = self.prompt | self.llm | self.parser

    def translate(self, item: GenericTranslationInput) -> GenericTranslationOutput:
        # Call the chain
        parsed = self.chain.invoke({
            "title": item.title,
            "description": item.description or ""
        })

        # Ensure description is always a string in the output
        if isinstance(parsed.description, dict):
            description_str = json.dumps(parsed.description, ensure_ascii=False)
        else:
            description_str = parsed.description

        return GenericTranslationOutput(
            entity=item.entity,
            entity_id=item.entity_id,
            title=parsed.title,
            description=description_str
        )

    async def translate_batch(self, items: List[GenericTranslationInput], concurrency: int = 5) -> List[GenericTranslationOutput]:
        async def run_item(item: GenericTranslationInput):
            loop = asyncio.get_event_loop()
            return await loop.run_in_executor(None, functools.partial(self.translate, item))

        tasks = [run_item(item) for item in items]
        results = []
        for i in range(0, len(tasks), concurrency):
            chunk = tasks[i:i+concurrency]
            results.extend(await asyncio.gather(*chunk))
        return results
