import sys
from pathlib import Path

# --------------------------------------------------
# Ensure project root is in PYTHONPATH
# --------------------------------------------------
ROOT_DIR = Path(__file__).resolve().parents[1]
sys.path.append(str(ROOT_DIR))

# --------------------------------------------------
# Imports AFTER path fix
# --------------------------------------------------
from sqlalchemy.orm import Session

from app.db.session import SessionLocal
from app.db.models.career import CareerCategory, CategoryIdealProfile
from app.core.category_ideals import CATEGORY_IDEAL_PROFILES


def seed_category_ideal_profiles() -> None:
    db: Session = SessionLocal()

    inserted = 0
    skipped = 0

    for category_name, vectors in CATEGORY_IDEAL_PROFILES.items():
        category = (
            db.query(CareerCategory)
            .filter(CareerCategory.name == category_name)
            .first()
        )

        if not category:
            print(f"⚠️  Category not found in DB: {category_name}")
            skipped += 1
            continue

        exists = (
            db.query(CategoryIdealProfile)
            .filter_by(category_id=category.id)
            .first()
        )

        if exists:
            skipped += 1
            continue

        profile = CategoryIdealProfile(
            category_id=category.id,
            ocean_vec=[vectors["ocean"][k] for k in ["O", "C", "E", "A", "N"]],
            riasec_vec=[vectors["riasec"][k] for k in ["R", "I", "A", "S", "E", "C"]],
        )

        db.add(profile)
        inserted += 1

    db.commit()
    db.close()

    print("✅ Category ideal profiles seeding complete")
    print(f"   Inserted: {inserted}")
    print(f"   Skipped : {skipped}")


if __name__ == "__main__":
    seed_category_ideal_profiles()