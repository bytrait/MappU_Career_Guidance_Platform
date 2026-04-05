from sqlalchemy.orm import Session
from app.crud import crud_translation
from app.schemas.translation import TranslationCreate

def save_translation(db: Session, data: TranslationCreate):
    """
    Business logic wrapper for saving/updating translations.
    """
    return crud_translation.upsert_translation(db, data)
