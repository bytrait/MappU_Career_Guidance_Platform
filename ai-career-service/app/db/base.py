"""
This file imports all models so Alembic can detect them
when running `alembic revision --autogenerate`.
"""

from app.db.base_class import Base  # noqa
from app.db.models.career import Career, CareerEligibility # noqa
from app.db.models.careerTitle import CareerTitle
# ⬆️ Add all new models here as you create them
