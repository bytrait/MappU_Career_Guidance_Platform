from sqlalchemy.orm import Session
from sqlalchemy import text
from app.db.models import career as models
from app.db.session import SessionLocal

CAREER_TITLES = [
    "Software Developer",
    "Doctor",
    "Data Scientist",
    "Mechanical Engineer",
    "Civil Engineer",
    "Lawyer",
    "Teacher",
    "Nurse",
    "Pharmacist",
    "Pilot",
    "Graphic Designer",
    "Architect",
    "Psychologist",
    "Accountant",
    "Business Analyst",
    "Web Developer",
    "AI Engineer",
    "Cybersecurity Specialist",
    "Dentist",
    "Surgeon",
    "Economist",
    "Marketing Manager",
    "HR Manager",
    "Content Writer",
    "Journalist",
    "Biotechnologist",
    "Zoologist",
    "Environmental Scientist",
    "Geologist",
    "Astronomer",
    "Physicist",
    "Chemist",
    "Mathematician",
    "Statistician",
    "Social Worker",
    "Political Scientist",
    "Historian",
    "Librarian",
    "Animator",
    "Fashion Designer",
    "Interior Designer",
    "Event Manager",
    "Chef",
    "Hotel Manager",
    "Tour Guide",
    "Entrepreneur",
    "Sales Executive",
    "Digital Marketer",
    "Product Manager",
    "UX Designer",
]

def truncate_tables(db: Session):
    """⚠️ Clears all career data (for reseeding)."""
    db.execute(text("TRUNCATE TABLE career_translations RESTART IDENTITY CASCADE;"))
    db.execute(text("TRUNCATE TABLE careers RESTART IDENTITY CASCADE;"))
    db.commit()

def seed_careers(db: Session, titles=CAREER_TITLES):
    """Insert careers with only titles (description empty)."""
    for title in titles:
        career = models.Career(category=None)
        db.add(career)
        db.flush()  # fetch career.id

        translation = models.CareerTranslation(
            career_id=career.id,
            language="en",
            title=title,
            description=None,
        )
        db.add(translation)

    db.commit()
    print(f"✅ Inserted {len(titles)} careers.")


if __name__ == "__main__":
    db = SessionLocal()
    truncate_tables(db)
    seed_careers(db)
    db.close()
