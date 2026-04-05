"""
Category IDEAL OCEAN + RIASEC profiles

IMPORTANT:
- Keys MUST match career_categories.name exactly
- Do NOT change names unless DB is updated
"""

from typing import Dict


CATEGORY_IDEAL_PROFILES: Dict[str, Dict[str, Dict[str, int]]] = {

    # -------------------------------------------------
    # SCIENCE / TECHNOLOGY
    # -------------------------------------------------
    "Science & Research": {
        "ocean":  {"O": 8, "C": 7, "E": 3, "A": 5, "N": 4},
        "riasec": {"R": 6, "I": 9, "A": 4, "S": 3, "E": 3, "C": 7},
    },
    "Engineering & Technology": {
        "ocean":  {"O": 6, "C": 8, "E": 3, "A": 4, "N": 4},
        "riasec": {"R": 8, "I": 7, "A": 3, "S": 2, "E": 3, "C": 8},
    },
    "Information Technology": {
        "ocean":  {"O": 6, "C": 8, "E": 3, "A": 4, "N": 4},
        "riasec": {"R": 7, "I": 7, "A": 3, "S": 2, "E": 4, "C": 8},
    },
    "Data & Business Analytics": {
        "ocean":  {"O": 7, "C": 8, "E": 4, "A": 4, "N": 4},
        "riasec": {"R": 4, "I": 8, "A": 3, "S": 3, "E": 6, "C": 8},
    },
    "Biotechnology & Life Sciences": {
        "ocean":  {"O": 7, "C": 7, "E": 3, "A": 5, "N": 4},
        "riasec": {"R": 5, "I": 9, "A": 3, "S": 4, "E": 2, "C": 7},
    },
    "Pharmaceutical Sciences": {
        "ocean":  {"O": 6, "C": 8, "E": 3, "A": 5, "N": 4},
        "riasec": {"R": 5, "I": 8, "A": 2, "S": 4, "E": 3, "C": 8},
    },

    # -------------------------------------------------
    # HEALTH / MEDICINE
    # -------------------------------------------------
    "Healthcare & Medicine": {
        "ocean":  {"O": 6, "C": 7, "E": 4, "A": 7, "N": 4},
        "riasec": {"R": 5, "I": 8, "A": 3, "S": 8, "E": 3, "C": 7},
    },

    # -------------------------------------------------
    # BUSINESS / FINANCE
    # -------------------------------------------------
    "Business & Management": {
        "ocean":  {"O": 6, "C": 8, "E": 7, "A": 6, "N": 4},
        "riasec": {"R": 4, "I": 5, "A": 4, "S": 7, "E": 9, "C": 8},
    },
    "Commerce & Management": {
        "ocean":  {"O": 5, "C": 8, "E": 6, "A": 6, "N": 4},
        "riasec": {"R": 3, "I": 5, "A": 3, "S": 6, "E": 8, "C": 8},
    },
    "Finance & Accounting": {
        "ocean":  {"O": 5, "C": 9, "E": 4, "A": 4, "N": 4},
        "riasec": {"R": 3, "I": 6, "A": 2, "S": 3, "E": 6, "C": 9},
    },
    "Economics & Finance": {
        "ocean":  {"O": 6, "C": 8, "E": 5, "A": 4, "N": 4},
        "riasec": {"R": 4, "I": 7, "A": 2, "S": 3, "E": 7, "C": 8},
    },
    "Banking & Financial Services": {
        "ocean":  {"O": 5, "C": 8, "E": 6, "A": 5, "N": 4},
        "riasec": {"R": 3, "I": 5, "A": 2, "S": 5, "E": 8, "C": 8},
    },

    # -------------------------------------------------
    # DESIGN / MEDIA / ARTS
    # -------------------------------------------------
    "Design & Creative Arts": {
        "ocean":  {"O": 9, "C": 5, "E": 6, "A": 5, "N": 4},
        "riasec": {"R": 3, "I": 4, "A": 9, "S": 5, "E": 5, "C": 4},
    },
    "Architecture & Design": {
        "ocean":  {"O": 8, "C": 7, "E": 4, "A": 4, "N": 4},
        "riasec": {"R": 7, "I": 6, "A": 6, "S": 2, "E": 4, "C": 7},
    },
    "Media & Communication": {
        "ocean":  {"O": 8, "C": 5, "E": 7, "A": 6, "N": 4},
        "riasec": {"R": 2, "I": 4, "A": 7, "S": 6, "E": 7, "C": 4},
    },
    "Media & Entertainment": {
        "ocean":  {"O": 8, "C": 4, "E": 7, "A": 5, "N": 4},
        "riasec": {"R": 2, "I": 3, "A": 8, "S": 6, "E": 6, "C": 3},
    },
    "Performing & Fine Arts": {
        "ocean":  {"O": 9, "C": 4, "E": 7, "A": 5, "N": 4},
        "riasec": {"R": 2, "I": 3, "A": 9, "S": 6, "E": 5, "C": 3},
    },

    # -------------------------------------------------
    # EDUCATION / SOCIAL / GOVERNMENT
    # -------------------------------------------------
    "Education & Training": {
        "ocean":  {"O": 6, "C": 7, "E": 5, "A": 8, "N": 4},
        "riasec": {"R": 3, "I": 6, "A": 4, "S": 9, "E": 5, "C": 6},
    },
    "Social Sciences & Psychology": {
        "ocean":  {"O": 7, "C": 6, "E": 4, "A": 8, "N": 4},
        "riasec": {"R": 3, "I": 7, "A": 4, "S": 8, "E": 4, "C": 6},
    },
    "Social Work & Development": {
        "ocean":  {"O": 6, "C": 6, "E": 4, "A": 9, "N": 4},
        "riasec": {"R": 2, "I": 5, "A": 3, "S": 9, "E": 4, "C": 5},
    },
    "Government & Administration": {
        "ocean":  {"O": 5, "C": 8, "E": 6, "A": 6, "N": 4},
        "riasec": {"R": 3, "I": 5, "A": 2, "S": 6, "E": 7, "C": 8},
    },
    "Public Administration": {
        "ocean":  {"O": 5, "C": 8, "E": 6, "A": 6, "N": 4},
        "riasec": {"R": 3, "I": 5, "A": 2, "S": 6, "E": 7, "C": 8},
    },
    "Legal & Compliance": {
        "ocean":  {"O": 5, "C": 8, "E": 5, "A": 4, "N": 4},
        "riasec": {"R": 3, "I": 7, "A": 2, "S": 4, "E": 7, "C": 9},
    },

    # -------------------------------------------------
    # LOGISTICS / TRAVEL / OTHER
    # -------------------------------------------------
    "Logistics & Supply Chain": {
        "ocean":  {"O": 5, "C": 8, "E": 4, "A": 4, "N": 4},
        "riasec": {"R": 5, "I": 5, "A": 2, "S": 3, "E": 6, "C": 8},
    },
    "Transportation & Logistics": {
        "ocean":  {"O": 4, "C": 8, "E": 4, "A": 4, "N": 4},
        "riasec": {"R": 6, "I": 4, "A": 2, "S": 3, "E": 5, "C": 8},
    },
    "Hospitality & Tourism": {
        "ocean":  {"O": 6, "C": 5, "E": 7, "A": 7, "N": 4},
        "riasec": {"R": 2, "I": 3, "A": 3, "S": 8, "E": 7, "C": 4},
    },
    "Travel, Tourism & Hospitality": {
        "ocean":  {"O": 6, "C": 5, "E": 7, "A": 7, "N": 4},
        "riasec": {"R": 2, "I": 3, "A": 3, "S": 8, "E": 7, "C": 4},
    },
    "Agriculture & Food Sciences": {
        "ocean":  {"O": 6, "C": 7, "E": 3, "A": 5, "N": 4},
        "riasec": {"R": 6, "I": 6, "A": 2, "S": 4, "E": 3, "C": 7},
    },
    "Sports & Fitness": {
        "ocean":  {"O": 6, "C": 6, "E": 7, "A": 6, "N": 4},
        "riasec": {"R": 7, "I": 4, "A": 3, "S": 7, "E": 5, "C": 4},
    },
    "Urban Planning & Infrastructure": {
        "ocean":  {"O": 6, "C": 8, "E": 4, "A": 5, "N": 4},
        "riasec": {"R": 6, "I": 6, "A": 3, "S": 4, "E": 5, "C": 8},
    },
    "Aviation & Aerospace": {
        "ocean":  {"O": 7, "C": 8, "E": 4, "A": 4, "N": 4},
        "riasec": {"R": 7, "I": 7, "A": 3, "S": 3, "E": 4, "C": 8},
    },
}