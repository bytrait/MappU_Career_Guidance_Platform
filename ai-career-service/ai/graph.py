import asyncio
from langgraph.graph import StateGraph, END
from typing import TypedDict, List
from career_service.nodes.choose_prompt import choose_prompt_node
from career_service.nodes.get_careers import get_careers_node
from career_service.nodes.career_path import career_path_node
from career_service.schemas import CareerItem, CareerItemWithPath, CareerRequest


class CareerState(TypedDict):
    request: CareerRequest
    prompt: str
    career_list: List[CareerItem]
    enriched_careers: List[CareerItemWithPath]


def build_graph():
    graph = StateGraph(CareerState)

    async def step_choose_prompt(state: CareerState):
        return {"prompt": choose_prompt_node(state["request"])}

    async def step_get_careers(state: CareerState):
        return await get_careers_node({"prompt": state["prompt"]})

    async def step_get_paths(state: CareerState):
        careers = state["career_list"]

        async def fetch_path(career_item: CareerItem):
            return (await career_path_node({"career_item": career_item}))["career_item"]

        enriched = await asyncio.gather(*[fetch_path(c) for c in careers])
        return {"enriched_careers": enriched}

    graph.add_node("choose_prompt", step_choose_prompt)
    graph.add_node("get_careers", step_get_careers)
    graph.add_node("get_paths", step_get_paths)

    graph.add_edge("choose_prompt", "get_careers")
    graph.add_edge("get_careers", "get_paths")
    graph.add_edge("get_paths", END)

    graph.set_entry_point("choose_prompt")
    return graph.compile()
