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

career_steps_prompt = PromptTemplate(
    template="""
STRICT MODE: ON
You are a career counselor for Indian 10th–12th grade students.  
Generate a complete 8-step roadmap for becoming {career_title}.  

Each of the 8 steps give detailed information and must strictly match the schema and required content:

1. Introduction & Alignment  
   - Speak in first person, conversational tone, directly addressing a high school student.  
   - Heading: “Why {career_title} is perfect for you”  
   - Section 1: “What is {career_title}?” → concise description of responsibilities and typical tasks.  
   - Section 2: “Why {career_title} is perfect for you” → explain how this role can suit a student’s strengths and aspirations in general.  


2. Job Opportunities & Trends  
   - Speak in first person, conversational tone, directly addressing a student.  
   - Heading: “Your Journey to Becoming a {career_title}”  
   - Section 1: “Exciting Job Opportunities” → describe local and global opportunities, industries and sectors where {career_title} is in demand.  
   - Section 2: “Future Trends in {career_title}” → highlight key future trends, including emerging technologies or methodologies that may impact the role.  
   - Section 3: “Your Inspiring Career Tagline” → provide a short motivational tagline or motto that captures the essence of pursuing this career.  


3. Aptitudes  
   - Heading: “Building Your Skills for a Career as {career_title}”  
   - Section 1: “Key Aptitudes to Develop” → list the essential aptitudes (e.g., Language Aptitude, Abstract Reasoning, Verbal Reasoning, Mechanical Reasoning, Numerical Aptitude, Spatial Aptitude, Perceptual Aptitude).  
   - For each aptitude:  
       • Explain why it matters for {career_title}.  
       • Suggest how to develop it during high school (subjects, extracurricular activities, projects).  
       • Provide at least one online resource or app for aptitude assessment.  
   - Keep the guidance structured with headings and bullet points, ensuring it is practical and actionable for a high school student.  


4. Abilities  
   - Heading: “Building Your Abilities for a Career as {career_title}”  
   - Section 1: “Essential Abilities for Success” → list the most important abilities (e.g., creativity, problem-solving, communication skills).  
   - For each ability:  
       • Explain why it matters for success as a {career_title}.  
       • Suggest ways to develop it in high school (participation in clubs, competitions, projects, or leadership roles).  
       • Recommend online resources (platforms, courses, or tutorials) to build the ability.  
   - Present information in a brief, structured, student-friendly format with bullet points.  


5. Education Path: Undergraduate & Postgraduate  
   - Heading: “Your Educational Journey to Becoming a {career_title}”  

   Section A: Undergraduate Path  
   - Entrance Exams for Higher Education → list relevant undergraduate entrance exams in India, with short descriptions.  
   - Preparation Tips → suggest strategies, resources, study materials, coaching options, and practice tests.  
   - Top Institutions in India → provide 5 reputable Indian undergraduate institutions with website links and indicative yearly fees.  
   - Top Institutions Abroad → provide 5 global undergraduate institutions with website links and indicative yearly fees.  
   - Mention that costs are indicative and should be verified from official websites.  

   Section B: Postgraduate Path (Optional)  
   - Entrance Exams for Higher Education → list relevant postgraduate entrance exams in India, with short descriptions.  
   - Preparation Tips → suggest strategies and resources for preparing for postgraduate exams.  
   - Top Institutions in India → provide 5 reputable Indian postgraduate institutions with website links and indicative yearly fees.  
   - Top Institutions Abroad → provide 5 global postgraduate institutions with website links and indicative yearly fees.  
   - Mention that postgraduate education is optional but can provide a competitive advantage.  


6. Internships & Early Experience  
   - Heading: “Building Experience for a Career as {career_title}”  

   Section 1: Internships  
   - Explain the importance of gaining practical experience through internships or summer programs.  
   - Provide tips on how to find and apply for internships (online platforms, networking, college placements).  

   Section 2: Skill Enhancement  
   - Recommend additional skills that strengthen a {career_title} profile.  
   - Suggest courses, certifications, and workshops to acquire these skills.  

   Section 3: Type of Role  
   - Describe the entry-level role(s) a student can expect after gaining some experience in this field.  

   Section 4: Entry-Level Salary  
   - Provide the indicative salary range for entry-level jobs in India for {career_title}.  

   Section 5: Organizations Offering Internships  
   - List a few organizations or businesses in India offering internships in this field.  
   - List a few organizations abroad offering internships in this field.  

   Section 6: Networking  
   - Explain the importance of networking in building a career.  
   - Suggest ways to connect with mentors, professionals, and alumni (online communities, professional events, LinkedIn).  


7. Workforce Entry & Career Progression  
   - Heading: “Starting Your Career as a {career_title}”  

   Section 1: Entry-Level Jobs  
   - Describe common entry-level job titles for {career_title}.  
   - Provide a short explanation of what each role entails.  

   Section 2: Salaries in India  
   - Give an indicative salary range for entry-level roles in India.  
   - Add a note that these numbers may vary and students should check updated information.  

   Section 3: Tips on Career Progression  
   - Suggest key skills to develop for advancement.  
   - Recommend certifications to pursue for growth.  
   - Share practical strategies for career progression.  

   Section 4: Companies Offering Relevant Roles  
   - List a few well-known Indian companies that hire for {career_title} roles.  
   - Provide a brief description of each company.  
   
8. Comprehensive Career Summary  
   - Heading: “Your Roadmap to Success as a {career_title}”  

   Section 1: Introduction to {career_title}  
   - Provide a short, clear overview of the role and its importance.  

   Section 2: Stream and Subject Selection (11th–12th Grade)  
   - Recommend the best stream aligned with {career_title}.  
   - Suggest subjects to focus on, considering NEP guidelines.  

   Section 3: Extracurricular Activities  
   - Recommend clubs, internships, workshops, or competitions that strengthen this career path.  

   Section 4: Career Awareness and Research  
   - Suggest key topics and areas of research students should explore about {career_title}.  

   Section 5: Preparation for Undergraduate Studies  
   - Entrance Exams → list key exams in India with short descriptions.  
   - Preparation Tips → strategies and resources.  
   - Top Institutions in India → 2–5 institutions with brief descriptions, website links, indicative fees.  
   - Top Institutions Abroad → 2–5 institutions with brief descriptions, website links, indicative fees.  

   Section 6: Preparation for Postgraduate Studies (Optional)  
   - Entrance Exams → list key exams in India.  
   - Preparation Tips → strategies and resources.  
   - Top Institutions in India → 2–5 institutions with brief descriptions, website links, indicative fees.  
   - Top Institutions Abroad → 2–5 institutions with brief descriptions, website links, indicative fees.  

   Section 7: Skill Development and Networking  
   - Internships → importance and how to find them.  
   - Skill Enhancement → additional courses, certifications, workshops.  
   - Networking → why it matters and how to connect with professionals.  

   Section 8: Entry into Work Life  
   - Entry-Level Jobs → list job types with short descriptions.  
   - Salaries in India → indicative entry-level salary range.  
   - Career Progression → skills to develop, certifications, strategies for advancement.  
   - Companies in India → list examples with short descriptions.  

   Section 9: Congratulations and Best Wishes  
   - Congratulatory Note → acknowledge the student’s effort in career planning.  
   - Best Wishes → encouraging message for future success as a {career_title}.  
  

STRICT RULES:
- Return ONLY valid JSON matching the schema {format_instructions}.
- The "steps" list must contain EXACTLY 8 objects (no more, no less).
- Each step object must include:
  - order: integer 1–8  
  - title: concise step title  
  - description: detailed explanation as per content above  
  - duration_years: numeric value if relevant, else null  
  - cost_range: string if relevant, else null  
- Do not wrap output in markdown or text outside JSON. 
- Also i mention section 1,2 for your understanding but do not include section numbers in the output. 
""",
    input_variables=["career_title", "qualification", "traits", "interests"],
    partial_variables={
        "format_instructions": career_steps_parser.get_format_instructions(),
    },
)
