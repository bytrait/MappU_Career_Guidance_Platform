from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    Float,
    Boolean,
    ForeignKey,
    UniqueConstraint,
    Index,
)
from sqlalchemy.orm import relationship
from pgvector.sqlalchemy import Vector

from app.db.base_class import Base


# =========================================================
# CAREER CATEGORY (NORMALIZED)
# =========================================================

class CareerCategory(Base):
    __tablename__ = "career_categories"

    id = Column(Integer, primary_key=True)
    slug = Column(String, unique=True, nullable=False)   # engineering-technology
    name = Column(String, unique=True, nullable=False)   # Engineering & Technology

    careers = relationship("Career", back_populates="category_rel")
    ideal_profile = relationship(
        "CategoryIdealProfile",
        back_populates="category",
        uselist=False,
        cascade="all, delete-orphan",
    )


class CategoryIdealProfile(Base):
    """
    Stores IDEAL OCEAN + RIASEC vectors per category
    """
    __tablename__ = "category_ideal_profiles"

    category_id = Column(
        Integer,
        ForeignKey("career_categories.id", ondelete="CASCADE"),
        primary_key=True,
    )

    ocean_vec = Column(Vector(5), nullable=False)   # [O,C,E,A,N]
    riasec_vec = Column(Vector(6), nullable=False)  # [R,I,A,S,E,C]

    category = relationship("CareerCategory", back_populates="ideal_profile")


# =========================================================
# CAREER
# =========================================================

class Career(Base):
    __tablename__ = "careers"

    id = Column(Integer, primary_key=True, index=True)

    # ⛔ legacy (KEEP until migration is complete)
    category = Column(String, nullable=True)

    # ✅ normalized FK
    category_id = Column(
        Integer,
        ForeignKey("career_categories.id", ondelete="SET NULL"),
        nullable=True,
        index=True,
    )

    career_type = Column(String, nullable=True, index=True)

    # Financial info
    min_cost = Column(Float, nullable=True)
    avg_cost = Column(Float, nullable=True)
    high_cost = Column(Float, nullable=True)
    has_scholarship_options = Column(Boolean, default=False)
    avg_salary = Column(Float, nullable=True)

    # Vectors
    riasec_vec  = Column(Vector(6),  nullable=True)
    ocean_vec   = Column(Vector(5),  nullable=True)
    profile_vec = Column(Vector(11), nullable=True)  # ocean + riasec
    aptitude_vec = Column(Vector(5), nullable=True)

    # Relationships
    category_rel = relationship("CareerCategory", back_populates="careers")

    eligibility  = relationship(
        "CareerEligibility",
        back_populates="career",
        cascade="all, delete-orphan",
    )
    paths = relationship(
        "CareerPath",
        back_populates="career",
        cascade="all, delete-orphan",
    )
    translations = relationship(
        "CareerTranslation",
        back_populates="career",
        cascade="all, delete-orphan",
    )


# =========================================================
# CAREER TRANSLATIONS
# =========================================================

class CareerTranslation(Base):
    __tablename__ = "career_translations"
    __table_args__ = (
        UniqueConstraint("career_id", "language", name="uq_career_lang"),
    )

    id = Column(Integer, primary_key=True, index=True)
    career_id = Column(
        Integer,
        ForeignKey("careers.id", ondelete="CASCADE"),
        nullable=False,
    )
    language = Column(String, nullable=False)

    title = Column(String, nullable=False)
    description = Column(Text, nullable=True)

    career = relationship("Career", back_populates="translations")


# =========================================================
# CAREER ELIGIBILITY
# =========================================================

class CareerEligibility(Base):
    __tablename__ = "career_eligibility"

    id = Column(Integer, primary_key=True, index=True)
    career_id = Column(
        Integer,
        ForeignKey("careers.id", ondelete="CASCADE"),
        nullable=False,
    )

    education_level = Column(String, nullable=False)
    stream = Column(String, nullable=True)
    degree = Column(String, nullable=True)

    career = relationship("Career", back_populates="eligibility")


# =========================================================
# CAREER PATHS
# =========================================================

class CareerPath(Base):
    __tablename__ = "career_paths"

    id = Column(Integer, primary_key=True, index=True)
    career_id = Column(
        Integer,
        ForeignKey("careers.id", ondelete="CASCADE"),
        nullable=False,
    )

    name = Column(String, nullable=False)

    career = relationship("Career", back_populates="paths")
    steps = relationship(
        "CareerStep",
        back_populates="path",
        cascade="all, delete-orphan",
    )
    translations = relationship(
        "CareerPathTranslation",
        back_populates="path",
        cascade="all, delete-orphan",
    )


class CareerPathTranslation(Base):
    __tablename__ = "career_path_translations"
    __table_args__ = (
        UniqueConstraint("path_id", "language", name="uq_path_lang"),
    )

    id = Column(Integer, primary_key=True, index=True)
    path_id = Column(
        Integer,
        ForeignKey("career_paths.id", ondelete="CASCADE"),
        nullable=False,
    )
    language = Column(String, nullable=False)

    name = Column(String, nullable=False)

    path = relationship("CareerPath", back_populates="translations")


# =========================================================
# CAREER STEPS
# =========================================================

class CareerStep(Base):
    __tablename__ = "career_steps"

    id = Column(Integer, primary_key=True, index=True)
    path_id = Column(
        Integer,
        ForeignKey("career_paths.id", ondelete="CASCADE"),
        nullable=False,
    )

    order = Column(Integer, nullable=False)
    type = Column(String, nullable=False)
    duration_years = Column(Float, nullable=True)
    cost_range = Column(String, nullable=True)
    note = Column(Text, nullable=True)

    path = relationship("CareerPath", back_populates="steps")
    scholarships = relationship(
        "Scholarship",
        back_populates="step",
        cascade="all, delete-orphan",
    )
    translations = relationship(
        "CareerStepTranslation",
        back_populates="step",
        cascade="all, delete-orphan",
    )


class CareerStepTranslation(Base):
    __tablename__ = "career_step_translations"
    __table_args__ = (
        UniqueConstraint("step_id", "language", name="uq_step_lang"),
    )

    id = Column(Integer, primary_key=True, index=True)
    step_id = Column(
        Integer,
        ForeignKey("career_steps.id", ondelete="CASCADE"),
        nullable=False,
    )
    language = Column(String, nullable=False)

    title = Column(String, nullable=False)
    note = Column(Text, nullable=True)

    step = relationship("CareerStep", back_populates="translations")


# =========================================================
# SCHOLARSHIPS
# =========================================================

class Scholarship(Base):
    __tablename__ = "scholarships"

    id = Column(Integer, primary_key=True, index=True)
    step_id = Column(
        Integer,
        ForeignKey("career_steps.id", ondelete="CASCADE"),
        nullable=False,
    )

    coverage = Column(Text, nullable=True)
    link = Column(String, nullable=True)

    step = relationship("CareerStep", back_populates="scholarships")
    translations = relationship(
        "ScholarshipTranslation",
        back_populates="scholarship",
        cascade="all, delete-orphan",
    )


class ScholarshipTranslation(Base):
    __tablename__ = "scholarship_translations"
    __table_args__ = (
        UniqueConstraint("scholarship_id", "language", name="uq_scholarship_lang"),
    )

    id = Column(Integer, primary_key=True, index=True)
    scholarship_id = Column(
        Integer,
        ForeignKey("scholarships.id", ondelete="CASCADE"),
        nullable=False,
    )
    language = Column(String, nullable=False)

    name = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    eligibility = Column(Text, nullable=True)

    scholarship = relationship("Scholarship", back_populates="translations")


# =========================================================
# VECTOR INDEXES
# =========================================================

Index(
    "ix_careers_profile_vec_cos",
    Career.profile_vec,
    postgresql_using="ivfflat",
    postgresql_with={"lists": 100},
    postgresql_ops={"profile_vec": "vector_cosine_ops"},
)

Index(
    "ix_careers_riasec_vec_cos",
    Career.riasec_vec,
    postgresql_using="ivfflat",
    postgresql_with={"lists": 100},
    postgresql_ops={"riasec_vec": "vector_cosine_ops"},
)

Index(
    "ix_careers_ocean_vec_cos",
    Career.ocean_vec,
    postgresql_using="ivfflat",
    postgresql_with={"lists": 100},
    postgresql_ops={"ocean_vec": "vector_cosine_ops"},
)