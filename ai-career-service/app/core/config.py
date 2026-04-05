from pydantic import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Career Guidance Platform"
    DATABASE_URL: str

    class Config:
        env_file = ".env"


settings = Settings()
