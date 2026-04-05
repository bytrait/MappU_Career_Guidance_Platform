Career AI LLM module
====================

This repo contains a minimal FastAPI + LangGraph + LangChain (Mistral) implementation
for the flow:
start -> choose_prompt -> get_careers -> loop_each(career_path_chain) -> end

Files:
- career_service/: main package
- examples/: run example
- .env.example: environment variables

To run:
- install dependencies (poetry or pip)
- set MISTRAL_API_KEY and LANGSMITH_API_KEY in .env
- uvicorn career_service.main:app --reload
