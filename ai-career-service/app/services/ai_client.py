import httpx
from typing import List, Dict, Any
from typing import List, Optional
import time
import asyncio
from app.core.config import settings
import requests


AI_SERVICE_URL = "http://localhost:8000"  # adjust if deployed differently



# Tunable defaults
DEFAULT_TIMEOUT_SECONDS = 180.0   # allow long-running classification
RETRY_ATTEMPTS = 3
INITIAL_BACKOFF_SECONDS = 1.0

DEFAULT_TIMEOUT = getattr(settings, "AI_TIMEOUT", 600)  # 10 minutes
MAX_RETRIES = 2

AI_TIMEOUT = int(getattr(settings, "AI_TIMEOUT", 600))        # seconds, default 10 minutes
AI_MAX_RETRIES = int(getattr(settings, "AI_MAX_RETRIES", 2))  # total attempts


async def _post_with_retries(path: str, json_payload: dict, timeout: Optional[float] = None):
    timeout = timeout or DEFAULT_TIMEOUT_SECONDS
    attempt = 0
    while True:
        attempt += 1
        try:
            async with httpx.AsyncClient(timeout=timeout) as client:
                resp = await client.post(f"{AI_SERVICE_URL}{path}", json=json_payload)
                resp.raise_for_status()
                return resp.json()
        except Exception as exc:
            if attempt >= RETRY_ATTEMPTS:
                # re-raise last error so caller can decide to skip or fail
                raise
            # exponential backoff
            backoff = INITIAL_BACKOFF_SECONDS * (2 ** (attempt - 1))
            # jitter
            backoff = backoff + (0.1 * backoff)
            await asyncio.sleep(backoff)

# --------- Career Generation ---------
async def generate_career(career: Dict[str, Any]) -> Dict[str, Any]:
    """
    Call AI microservice to generate content for a single career.
    """
    async with httpx.AsyncClient() as client:
        resp = await client.post(f"{AI_SERVICE_URL}/generate-career", json=career)
        resp.raise_for_status()
        return resp.json()

async def generate_batch(careers: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """
    Call AI microservice to generate content for multiple careers.
    """
    async with httpx.AsyncClient(timeout=120.0) as client:
        resp = await client.post(f"{AI_SERVICE_URL}/generate-batch", json=careers)
        resp.raise_for_status()
        return resp.json()

# --------- Translation ---------
async def translate_batch(items: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """
    Call AI microservice to translate multiple careers/steps in parallel.
    Payload must be shaped like: {"items": [...]}
    """
    async with httpx.AsyncClient(timeout=120.0) as client:
        resp = await client.post(f"{AI_SERVICE_URL}/translate-batch", json={"items": items})
        resp.raise_for_status()
        return resp.json()

async def classify_career(career_id: int, title: str):
    async with httpx.AsyncClient() as client:
        response = await client.post(f"{AI_SERVICE_URL}/classify-career", json={"id": career_id, "title": title})
        response.raise_for_status()
        return response.json()

async def classify_careers_batch(careers: List[dict], timeout: Optional[float] = None):
    """
    careers: [{ "id": int, "title": str }, ...]
    Returns: [{ "id": int, "career_type": str }, ...]
    """
    payload = {"careers": careers}
    return await _post_with_retries("/classify-careers-batch", payload, timeout=timeout)



async def fetch_base_info(career_name: str) -> Optional[Dict]:
    """
    Fetch base RIASEC, OCEAN, cost, salary, and summary info from AI module.
    Endpoint: /ai/career/{career_name}/base-info
    """
    url = f"{AI_SERVICE_URL}/ai/career/base-info/{career_name}"
    try:
        async with httpx.AsyncClient(timeout=90) as client:
            response = await client.get(url)
            response.raise_for_status()
            return response.json()
    except Exception as e:
        print(f"❌ Error fetching base info for '{career_name}': {e}")
        return None
    

async def fetch_career_stages(career_name: str, career_type: str) -> Optional[Dict]:
    """
    Fetch 8-stage detailed content for a given career.
    GET {AI_SERVICE_URL}/ai/career/{career_name}/grade10/{career_type}
    Returns parsed JSON or None on permanent failure.
    Retries on transient errors/timeouts.
    """
    if not career_name:
        return None

    url = f"{AI_SERVICE_URL.rstrip('/')}/ai/career/stages/{career_name}/grade10/{career_type}"
    last_err = None

    for attempt in range(1, AI_MAX_RETRIES + 1):
        start = time.time()
        try:
            async with httpx.AsyncClient(timeout=AI_TIMEOUT) as client:
                resp = await client.get(url)
                resp.raise_for_status()
                data = resp.json()
                elapsed = time.time() - start
                # Informational print; your app logger can be used instead
                print(f"[ai_client] received '{career_name}' in {elapsed:.1f}s (attempt {attempt})")
                return data

        except httpx.ReadTimeout:
            print(f"[ai_client] timeout for '{career_name}' after {AI_TIMEOUT}s (attempt {attempt})")
            last_err = "timeout"
        except httpx.HTTPStatusError as he:
            # 4xx likely permanent, 5xx transient; retry only on 5xx
            status = he.response.status_code
            print(f"[ai_client] HTTP error for '{career_name}' status={status} (attempt {attempt})")
            last_err = f"HTTP {status}"
            if 500 <= status < 600:
                # allow retry
                pass
            else:
                break
        except Exception as e:
            print(f"[ai_client] error fetching '{career_name}': {e} (attempt {attempt})")
            last_err = str(e)

        # small backoff before next attempt
        await asyncio.sleep(1 + attempt)

    print(f"[ai_client] failed to fetch '{career_name}' after {AI_MAX_RETRIES} attempts — {last_err}")
    return None



async def translate_title_via_ai(title: str) -> str:
    """
    Calls the AI module API, sends English text,
    receives Marathi translated text.
    """
    payload = {"id": "title", "content": title}

    async with httpx.AsyncClient(timeout=60) as client:
        response = await client.post(f"{AI_SERVICE_URL}/translate/marathi", json=payload)

    response.raise_for_status()
    data = response.json()
    return data["translated"]


def generate_single_stage_html(
    *,
    career_name: str,
    stage_number: int,
    grade: str,
    career_type: str,
) -> str | None:
    """
    Calls AI Career Service to generate HTML for ONE stage.
    Read-only external call. No DB interaction here.
    """

    payload = {
        "career_name": career_name,
        "stage_number": stage_number,
        "grade": grade,
        "career_type": career_type,
    }

    try:
        response = requests.post(
            f"{AI_SERVICE_URL}/ai/career/stage",
            json=payload,
            timeout=120,
        )
        response.raise_for_status()
    except Exception:
        return None

    data = response.json()
    return data.get("html")