# app/services/translation_client.py
import httpx
from typing import Optional

AI_BASE = "http://127.0.0.1:8000/translate"
# tune timeouts for different endpoints
SHORT_TIMEOUT = 20.0
LONG_TIMEOUT = 180.0

async def request_marathi_title_desc(career_id: int, title: str, description: str) -> dict:
    """
    Calls AI endpoint POST /translate/marathi/structured (JSON)
    Expects: { id, title, description }
    Returns AI JSON response (dict)
    """
    payload = {"id": str(career_id), "title": title or "", "description": description or ""}
    async with httpx.AsyncClient(timeout=SHORT_TIMEOUT) as client:
        r = await client.post(f"{AI_BASE}/marathi/structured", json=payload)
        r.raise_for_status()
        return r.json()

async def translate_note_via_ai(step_id: int, note: str) -> str:
    """
    Calls AI endpoint POST /translate/marathi (form-data)
    Expects: form fields id, content
    Returns the translated text (string) or "" on error.
    """
    data = {"id": str(step_id), "content": note or ""}
    try:
        async with httpx.AsyncClient(timeout=LONG_TIMEOUT) as client:
            r = await client.post(f"{AI_BASE}/marathi", data=data)
            r.raise_for_status()
            out = r.json()
            # some AI endpoints return "translated" or "translated_text" or "content"
            return out.get("translated") or out.get("content") or out.get("translated_text") or ""
    except Exception:
        return ""
