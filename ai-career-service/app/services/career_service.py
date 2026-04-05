from app.crud.crud_career import CareerRepository
from fastapi import HTTPException

class CareerService:

    @staticmethod
    def list_careers(db, page: int, limit: int):
        total, careers = CareerRepository.get_careers_with_steps(db, page, limit)

        result = []

        for c in careers:
            # Flatten all steps across all paths
            steps = []
            for path in c.paths:
                for step in path.steps:
                    steps.append(step)

            result.append({
                "id": c.id,
                "category": c.category,
                "career_type": c.career_type,

                "base_info": {
                    "min_cost": c.min_cost,
                    "avg_cost": c.avg_cost,
                    "high_cost": c.high_cost,
                    "avg_salary": c.avg_salary,
                    "has_scholarship_options": c.has_scholarship_options,
                },

                "translations": c.translations,
                "steps": steps
            })

        return {
            "total": total,
            "page": page,
            "limit": limit,
            "data": result
        }
        
    @staticmethod
    def list_titles(db, page: int, limit: int):
        total, careers = CareerRepository.list_titles(db, page, limit)

        result = []

        for c in careers:
            # convert translations to {en: "Software Developer", mr: "..."}
            title_map = {t.language: t.title for t in c.translations}

            result.append({
                "id": c.id,
                "titles": title_map,
            })

        return {
            "total": total,
            "page": page,
            "limit": limit,
            "data": result
        }


    @staticmethod
    def get_detail(db, career_id: int):

        career = CareerRepository.get_detail(db, career_id)
        if not career:
            raise HTTPException(status_code=404, detail="Career not found")

        # Flatten steps from all paths
        steps = []
        for path in career.paths:
            for step in path.steps:
                steps.append(step)

        return {
            "id": career.id,
            "category": career.category,
            "career_type": career.career_type,

            "base_info": {
                "min_cost": career.min_cost,
                "avg_cost": career.avg_cost,
                "high_cost": career.high_cost,
                "avg_salary": career.avg_salary,
                "has_scholarship_options": career.has_scholarship_options,
            },

            "translations": [
                {
                    "id": t.id,
                    "language": t.language,
                    "title": t.title,
                    "description": t.description
                }
                for t in career.translations
            ],

            "steps": [
                {
                    "id": s.id,
                    "order": s.order,
                    "type": s.type,
                    "duration_years": s.duration_years,
                    "cost_range": s.cost_range,
                    "note": s.note,

                    "translations": [
                        {
                            "id": st.id,
                            "language": st.language,
                            "title": st.title,
                            "note": st.note
                        }
                        for st in s.translations
                    ]
                }
                for s in sorted(steps, key=lambda x: x.order)
            ]
        }