from sqlalchemy.orm import Session
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.models.career import CareerTranslation, CareerStepTranslation  # <-- fix import
from app.schemas.translation import TranslationCreate

def upsert_translation(db: Session, data: TranslationCreate):
    """
    Insert or update translation based on entity type.
    """
    if data.entity == "career":
        obj = (
            db.query(CareerTranslation)
            .filter(
                CareerTranslation.career_id == data.entity_id,
                CareerTranslation.language == data.language,
            )
            .first()
        )
        if obj:
            obj.title = data.title
            obj.description = data.description
        else:
            obj = CareerTranslation(
                career_id=data.entity_id,
                language=data.language,
                title=data.title,
                description=data.description,
            )
            db.add(obj)

    elif data.entity == "step":
        obj = (
            db.query(CareerStepTranslation)
            .filter(
                CareerStepTranslation.step_id == data.entity_id,
                CareerStepTranslation.language == data.language,
            )
            .first()
        )
        if obj:
            obj.title = data.title
            obj.note = data.description
        else:
            obj = CareerStepTranslation(
                step_id=data.entity_id,
                language=data.language,
                title=data.title,
                note=data.description,
            )
            db.add(obj)

    else:
        raise ValueError(f"Unsupported entity type: {data.entity}")

    db.commit()
    db.refresh(obj)
    return obj

# app/crud/crud_translation.py
from sqlalchemy.orm import Session
from sqlalchemy import select
from app.db.models.career import CareerTranslation, CareerStepTranslation


def upsert_career_translation(
    db: Session,
    career_id: int,
    lang: str,
    title: str,
    description: str | None = None
):
    """
    Pure synchronous UPSERT for Career translations.
    Does NOT commit – caller handles commit.
    """

    tr = (
        db.query(CareerTranslation)
        .filter(
            CareerTranslation.career_id == career_id,
            CareerTranslation.language == lang,
        )
        .first()
    )

    if tr:
        tr.title = title
        tr.description = description
        return tr

    # insert
    tr = CareerTranslation(
        career_id=career_id,
        language=lang,
        title=title,
        description=description,
    )
    db.add(tr)
    return tr


def upsert_step_translation(
    db: Session,
    step_id: int,
    lang: str,
    title: str,
    note: str | None = None
):
    """
    Synchronous UPSERT for Career Steps.
    """

    tr = (
        db.query(CareerStepTranslation)
        .filter(
            CareerStepTranslation.step_id == step_id,
            CareerStepTranslation.language == lang,
        )
        .first()
    )

    if tr:
        tr.title = title
        tr.note = note
        return tr

    tr = CareerStepTranslation(
        step_id=step_id,
        language=lang,
        title=title,
        note=note,
    )
    db.add(tr)
    return tr


def upsert_marathi_translation(
    db: Session,
    career_id: int,
    title: str,
    description: str | None = None
):
    """
    Insert OR update Marathi ('mr') translation for a career.
    """

    existing = (
        db.query(CareerTranslation)
        .filter(
            CareerTranslation.career_id == career_id,
            CareerTranslation.language == "mr"
        )
        .first()
    )

    if existing:
        # Update existing MR translation
        existing.title = title
        existing.description = description
        db.add(existing)
        return existing

    # Insert new MR translation
    new_entry = CareerTranslation(
        career_id=career_id,
        language="mr",
        title=title,
        description=description
    )

    db.add(new_entry)
    return new_entry
