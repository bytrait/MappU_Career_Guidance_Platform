import asyncio
import time
from typing import Callable, Any

async def retry_async(func: Callable, retries: int = 2, delay: float = 1.0, *args, **kwargs) -> Any:
    """
    Retry an async function a few times if it raises an exception.
    """
    for attempt in range(retries + 1):
        try:
            return await func(*args, **kwargs)
        except Exception as e:
            if attempt < retries:
                await asyncio.sleep(delay * (2 ** attempt))  # exponential backoff
            else:
                raise e

def retry_sync(func: Callable, retries: int = 2, delay: float = 1.0, *args, **kwargs) -> Any:
    """
    Retry a sync function a few times if it raises an exception.
    """
    for attempt in range(retries + 1):
        try:
            return func(*args, **kwargs)
        except Exception as e:
            if attempt < retries:
                time.sleep(delay * (2 ** attempt))  # exponential backoff
            else:
                raise e
