from typing import List, Dict, Any, Union
from sqlalchemy.orm import Session, joinedload
from sqlalchemy import text

from app.db.models.career import Career, CareerPath, CareerStep


# =========================================================
# Translation helper (UNCHANGED)
# =========================================================

def _get_translation(translations, language: str, field: str):
    tr = next((t for t in translations if t.language == language), None)
    used_lang = language

    if not tr and language != "en":
        tr = next((t for t in translations if t.language == "en"), None)
        used_lang = "en"

    if not tr and translations:
        tr = translations[0]
        used_lang = tr.language

    return {
        "value": getattr(tr, field, None) if tr else None,
        "used_language": used_lang,
    }


# =========================================================
# Serialization (UNCHANGED)
# =========================================================

def _serialize_career(career: Career, similarity: float, language: str) -> Dict:
    return {
        "id": career.id,
        "category_id": career.category_id,
        "category": career.category_rel.name if career.category_rel else None,
        "career_type": career.career_type,

        "title": _get_translation(career.translations, language, "title"),
        "description": _get_translation(career.translations, language, "description"),

        "cost": {
            "min": float(career.min_cost) if career.min_cost is not None else None,
            "avg": float(career.avg_cost) if career.avg_cost is not None else None,
            "max": float(career.high_cost) if career.high_cost is not None else None,
        },

        "avg_salary": float(career.avg_salary) if career.avg_salary is not None else None,

        "ocean": (
            {
                "O": float(career.ocean_vec[0]),
                "C": float(career.ocean_vec[1]),
                "E": float(career.ocean_vec[2]),
                "A": float(career.ocean_vec[3]),
                "N": float(career.ocean_vec[4]),
            }
            if career.ocean_vec is not None
            else None
        ),

        "riasec": (
            {
                "R": float(career.riasec_vec[0]),
                "I": float(career.riasec_vec[1]),
                "A": float(career.riasec_vec[2]),
                "S": float(career.riasec_vec[3]),
                "E": float(career.riasec_vec[4]),
                "C": float(career.riasec_vec[5]),
            }
            if career.riasec_vec is not None
            else None
        ),

        "steps": [
            {
                "id": s.id,
                "order": s.order,
                "type": s.type,
                "duration_years": s.duration_years,
                "cost_range": s.cost_range,
                "title": _get_translation(s.translations, language, "title"),
                "note": _get_translation(s.translations, language, "note"),
            }
            for p in career.paths
            for s in sorted(p.steps, key=lambda st: st.order)
        ],
        
       "aptitude": (
            {
                "NA": float(career.aptitude_vec[0]),
                "MR": float(career.aptitude_vec[1]),
                "LA": float(career.aptitude_vec[2]),
                "LR": float(career.aptitude_vec[3]),
                "SA": float(career.aptitude_vec[4]),
            }
            if career.aptitude_vec is not None
            else None
        ),

        "similarity": float(similarity),
    }


# =========================================================
# User vector builder (UNCHANGED)
# =========================================================

def build_user_vectors(profile_input: Union[Dict[str, Any], List[float]]) -> Dict[str, List[float]]:
    if isinstance(profile_input, list):
        if len(profile_input) != 11:
            raise ValueError("profile_vec list must be length 11")

        return {
            "ocean": [float(x) for x in profile_input[:5]],
            "riasec": [float(x) for x in profile_input[5:]],
        }

    ocean = profile_input.get("OCEAN") or {}
    riasec = profile_input.get("RIASEC") or {}

    return {
        "ocean": [float(ocean.get(k, 0)) for k in ["O", "C", "E", "A", "N"]],
        "riasec": [float(riasec.get(k, 0)) for k in ["R", "I", "A", "S", "E", "C"]],
    }


# =========================================================
# CATEGORY RANKING (FIXED)
# =========================================================

def rank_categories(
    db: Session,
    ocean_vec: List[float],
    riasec_vec: List[float],
    career_type: str,
    limit: int,
    buffer: int = 5,   # ← important
) -> List[int]:
    """
    Returns category IDs ordered by similarity.
    Uses buffer so we don't lose categories later.
    """

    ocean_str = "[" + ",".join(map(str, ocean_vec)) + "]"
    riasec_str = "[" + ",".join(map(str, riasec_vec)) + "]"

    sql = text("""
        SELECT
            cc.id AS category_id
        FROM category_ideal_profiles cip
        JOIN career_categories cc
            ON cc.id = cip.category_id
        WHERE EXISTS (
            SELECT 1
            FROM careers c
            WHERE c.category_id = cc.id
              AND c.career_type = :career_type
        )
        ORDER BY
            (0.3 * (1 - (cip.ocean_vec <=> :ocean)) +
             0.7 * (1 - (cip.riasec_vec <=> :riasec))) DESC
        LIMIT :limit
    """)

    rows = db.execute(
        sql,
        {
            "ocean": ocean_str,
            "riasec": riasec_str,
            "career_type": career_type,
            "limit": limit * buffer,  # ← BUFFER HERE
        },
    ).mappings().all()

    return [r["category_id"] for r in rows]


# =========================================================
# PICK BEST CAREER PER CATEGORY
# =========================================================

def pick_best_career_per_category(
    db: Session,
    category_ids: List[int],
    ocean_vec: List[float],
    riasec_vec: List[float],
    career_type: str,
    required: int,
) -> List[Dict]:
    """
    Ensures EXACTLY `required` careers
    from DIFFERENT categories.
    """

    ocean_str = "[" + ",".join(map(str, ocean_vec)) + "]"
    riasec_str = "[" + ",".join(map(str, riasec_vec)) + "]"

    results = []

    sql = text("""
        SELECT
            c.id,
            c.category_id,
            ROUND(
                (
                    (0.30 * (1 - (c.ocean_vec <=> :ocean))) +
                    (0.70 * (1 - (c.riasec_vec <=> :riasec)))
                )::numeric * 100,
                2
            ) AS similarity
        FROM careers c
        WHERE c.category_id = :category_id
          AND c.career_type = :career_type
        ORDER BY similarity DESC
        LIMIT 1
    """)

    for cid in category_ids:
        if len(results) == required:
            break

        row = db.execute(
            sql,
            {
                "ocean": ocean_str,
                "riasec": riasec_str,
                "category_id": cid,
                "career_type": career_type,
            },
        ).mappings().first()
        print("ROW:", row)

        if row:
            results.append(row)

    return results

# =========================================================
# FINAL API (OUTPUT UNCHANGED)
# =========================================================

def recommend_for_student(
    db: Session,
    profile_vec_input: Dict[str, Any],
    economic_status: str,
    language: str = "en",
) -> Dict:

    user = build_user_vectors(profile_vec_input)
    econ = (economic_status or "").lower().strip()
    lang = language.lower()

    def fetch_details(rows):
        ids = [r["id"] for r in rows]
        careers = (
            db.query(Career)
            .options(
                joinedload(Career.translations),
                joinedload(Career.category_rel),
                joinedload(Career.paths)
                .joinedload(CareerPath.steps)
                .joinedload(CareerStep.translations),
            )
            .filter(Career.id.in_(ids))
            .all()
        )
        cmap = {c.id: c for c in careers}
        return [
            _serialize_career(cmap[r["id"]], r["similarity"], lang)
            for r in rows
            if r["id"] in cmap
        ]

    if econ == "weak":
        pro_cat_ids = rank_categories(
            db, user["ocean"], user["riasec"], "professional", 5, buffer=5
        )       
        voc_cat_ids = rank_categories(
            db, user["ocean"], user["riasec"], "vocational", 5, buffer=5
        )

        pro = pick_best_career_per_category(
            db, pro_cat_ids, user["ocean"], user["riasec"], "professional", 5
        )
        voc = pick_best_career_per_category(
            db, voc_cat_ids, user["ocean"], user["riasec"], "vocational", 5
        )


        return {
            "economic_status": "weak",
            "recommendations": {
                "professional": fetch_details(pro),
                "vocational": fetch_details(voc),
            },
        }

    # stable
    # cat_ids = rank_categories(db, user["ocean"], user["riasec"], "professional", 10)
    cat_ids = rank_categories(
        db,
        user["ocean"],
        user["riasec"],
        career_type="professional",
        limit=10,
        buffer=10,   # ← important
    )

    final = pick_best_career_per_category(
        db,
        cat_ids,
        user["ocean"],
        user["riasec"],
        career_type="professional",
        required=10,
    )
    # final = pick_best_career_per_category(db, cat_ids, user["ocean"], user["riasec"], "professional")

    return {
        "economic_status": "stable",
        "recommendations": {
            "professional": fetch_details(final),
        },
    }
   
    
