from langchain.prompts import PromptTemplate
from langchain.output_parsers import PydanticOutputParser, OutputFixingParser
from langchain_mistralai import ChatMistralAI
from ai.schemas.career_output import CareerStepsOutput
from ai.config import settings

# LLM for repair
repair_llm = ChatMistralAI(
    model="open-mistral-7b",
    temperature=0.7,
    mistral_api_key=settings.mistral_api_key,
)

career_steps_parser = OutputFixingParser.from_llm(
    parser=PydanticOutputParser(pydantic_object=CareerStepsOutput),
    llm=repair_llm,
)

vocational_career_steps_prompt = PromptTemplate(
    template="""
STRICT MODE: ON
You are a career counselor for 10th-grade  students in Maharashtra.  
Generate a complete 8-step vocational roadmap for becoming {career_title}.  

Each of the 8 steps must strictly match the schema and required content:

step 1. Career Fit  
   - Heading: “Why {career_title} is a good choice for you”  
   - Explain in very simple English why this career suits a 10th-grade student’s personality and interests.  
   - Give 2–3 clear reasons that are easy to understand.  

step 2. Education Path  
   - Heading: “Education And Scholarships”  
   - List the minimum education or training needed in Maharashtra (ITI, diploma, vocational training, short courses).  
   - Mention course names, duration, approximate fees, and local availability.  
   - Keep it short and practical.  
   - Provide scholarships, government schemes, and NGO programs available for economically weak students in Maharashtra.  
   - For each, include eligibility, benefits, and how to apply in 2–3 sentences.  

step 3. Skill-Based Training  
   - Heading: “Training to Build Your Skills”  
   - Suggest skill development or vocational training programs in Maharashtra.  
   - Mention course duration, cost (if any), stipend, and recognized institutions like PMKVY, MSSDS, NSDC, ITIs.  

step 4. Apprenticeship & Early Earnings  
   - Heading: “Learn and Earn”  
   - Explain apprenticeships or on-the-job training opportunities for {career_title}.  
   - Include expected monthly stipend and how to apply (Mahaswayam, NAPS, or local contractors).  

step 5. Entry-Level Jobs  
   - Heading: “First Jobs You Can Do”  
   - Describe the first jobs a student can get after training.  
   - Include job titles, typical starting salary in Maharashtra, and where to find these jobs (Rozgar Melava, job portals, placement centres, local businesses).  

step 6. Career Growth  
   - Heading: “How You Can Grow in This Career”  
   - Show 2–3 simple steps of career progression from entry-level to higher roles.  
   - Mention further study or certificate courses that help in growth.  

step 7. Self-Employment / Entrepreneurship  
   - Heading: “Start Your Own Work”  
   - Suggest small business or self-employment ideas related to {career_title}.  
   - Include possible startup ideas, expected earnings, and government schemes like MUDRA, PMEGP, NRLM.  

step 8. Summary:
    - Heading: “Quick Summary”
- At the end, give a **short and simple summary** of the 8 steps in very easy English, so that a 10th-grade student can quickly understand the overall career path.  

STRICT RULES:  
- Return ONLY valid JSON matching the schema {format_instructions}.  
- The "steps" list must contain EXACTLY 8 objects (no more, no less).  
- Each step object must include:  
  - order: integer 1–8  
  - title: concise step title  
  - description: detailed explanation as per above  
  - duration_years: numeric value if relevant, else null  
  - cost_range: string if relevant, else null  
- Do not wrap output in markdown or add text outside JSON.
""",
    input_variables=["career_title", "qualification", "traits", "interests"],
    partial_variables={
        "format_instructions": career_steps_parser.get_format_instructions(),
    },
)
