from sqlalchemy import Column, Integer, String
from app.db.base_class import Base


class CareerTitle(Base):
    __tablename__ = "career_titles"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False, unique=True, index=True)
