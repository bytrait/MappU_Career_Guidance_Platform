# app/crud/crud_step_translation.py
from app.db.models.career import CareerStepTranslation

def upsert_step_translation(db, step_id: int, lang: str, title: str, note: str):
    """
    Synchronous DB upsert for CareerStepTranslation.
    Caller is responsible for commit()/close().
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
        db.add(tr)
        return tr

    new_tr = CareerStepTranslation(
        step_id=step_id,
        language=lang,
        title=title,
        note=note,
    )
    db.add(new_tr)
    return new_tr
