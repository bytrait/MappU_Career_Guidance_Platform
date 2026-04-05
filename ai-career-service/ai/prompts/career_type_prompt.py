from langchain.prompts import PromptTemplate
from langchain.output_parsers import PydanticOutputParser
from ai.schemas.career_type_output import CareerTypeOutput

career_type_parser = PydanticOutputParser(pydantic_object=CareerTypeOutput)

career_type_prompt = PromptTemplate(
    template="""
You are an expert career classifier.

Decide if the given career is "professional" or "vocational" based on these rules:
1. If the career requires a degree (e.g., MBBS, B.Tech, CA, Lawyer), it is professional.
2. If the career typically requires more than 2 years of study, it is professional.
3. If the average cost of becoming this career is more than 2 lakh INR, it is professional.
4. Otherwise, it is vocational
Respond ONLY in JSON as per the schema.

{format_instructions}

Career data:
id:{id}
Title: {title}
    """,
    input_variables=["title","id"],
    partial_variables={"format_instructions": career_type_parser.get_format_instructions()},
)
