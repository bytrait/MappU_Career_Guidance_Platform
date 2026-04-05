import re

def extract_json_block(text: str) -> str:
    """
    Extract the first JSON object/array from text.
    Handles code fences, explanations, and multiple JSON blocks.
    Always returns only the first valid block.
    """
    # Handle fenced code blocks
    code_match = re.search(r"```(?:json)?\s*(\{.*?\}|\[.*?\])\s*```", text, re.DOTALL)
    if code_match:
        return code_match.group(1)

    # Find all possible JSON objects/arrays
    json_matches = re.findall(r"(\{.*?\}|\[.*?\])", text, re.DOTALL)
    if json_matches:
        return json_matches[0]  # only first block

    return text.strip()
