from langchain.prompts import PromptTemplate
from langchain.output_parsers import PydanticOutputParser, OutputFixingParser
from ai.schemas.career_output import CareerBaseInfo
from langchain_mistralai import ChatMistralAI
from ai.config import settings

# Configure an LLM for repairing outputs
repair_llm = ChatMistralAI(model="open-mistral-7b", temperature=0, mistral_api_key=settings.mistral_api_key)

# Wrap parser with auto-fixing
career_base_parser = OutputFixingParser.from_llm(
    parser=PydanticOutputParser(pydantic_object=CareerBaseInfo),
    llm=repair_llm,
)

career_base_prompt = PromptTemplate(
    template="""
STRICT MODE: ON
You are a career counselor for Indian students.
Tone: professional, clear, concise, informative. Students are your primary audience.
Generate structured base information for the career: {career_title}.

The cost estimates should be realistic for India.
RISEC and OCEAN values must be realistic for the career.

Content rules:
- "description": 4–6 sentences, plain text. Summarize role, key responsibilities, and impact of {career_title}.  
- "category": Choose a broad field (e.g. Technology, Healthcare, Arts, Business, Education, Law).  
- "min_cost", "avg_cost", "high_cost": Estimated education/training costs in Indian Rupees. Use realistic numeric values.  

- "riasec": MUST BE A LIST of EXACTLY 6 floats between 0–10.  
  Order: [Realistic, Investigative, Artistic, Social, Enterprising, Conventional].  
  NO MORE, NO LESS.  

- "ocean": MUST BE A LIST of EXACTLY 5 floats between 0–10.  
  Order: [Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism].  
  NO MORE, NO LESS.  

STRICT RULES:
- Return ONLY valid JSON matching the schema.  
- Do not add explanations, examples, or text outside JSON.  
- Do not wrap in markdown code blocks.  
- Do not include comments.  
- Output must be a single JSON object.  
- No missing or extra fields.  

{format_instructions}
""",
    input_variables=["career_title"],
    partial_variables={"format_instructions": career_base_parser.get_format_instructions()},
)
