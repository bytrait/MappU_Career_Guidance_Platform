from pydantic import BaseSettings, Field

class Settings(BaseSettings):
    mistral_api_key: str = Field("", env="MISTRAL_API_KEY")
    langsmith_api_key: str = Field("", env="LANGSMITH_API_KEY")
    langsmith_project: str = Field("career-guidance", env="LANGSMITH_PROJECT")
    langsmith_tracing: bool = Field(True, env="LANGSMITH_TRACING")
    langsmith_endpoint: str = Field("https://api.smith.langchain.com", env="LANGSMITH_ENDPOINT")
    debug: bool = Field(False, env="DEBUG")

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

settings = Settings()
