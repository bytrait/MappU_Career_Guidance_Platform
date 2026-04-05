import os
import logging
from .config import settings

logging.basicConfig(
    level=logging.DEBUG if settings.debug else logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
logger = logging.getLogger("career_service")

# LangSmith / LangChain tracing env
if settings.langsmith_tracing:
    os.environ["LANGCHAIN_TRACING_V2"] = "true"
if settings.langsmith_api_key:
    os.environ["LANGCHAIN_API_KEY"] = settings.langsmith_api_key
if settings.langsmith_project:
    os.environ["LANGCHAIN_PROJECT"] = settings.langsmith_project
if settings.langsmith_endpoint:
    os.environ["LANGCHAIN_ENDPOINT"] = settings.langsmith_endpoint
