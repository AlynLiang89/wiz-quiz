from queries.leaderboard import (
    LeaderboardQueries,
    LeaderboardOut,
    LeaderboardIn,
    Error,
    LeaderboardGoingOut,
)
from fastapi import APIRouter, Depends, Response, status
from pydantic import BaseModel
from typing import Union


router = APIRouter()


class LeaderboardUpdate(BaseModel):
    account: int
    score: int


class LeaderboardsOut(BaseModel):
    leader_boards: list[LeaderboardGoingOut]


@router.get("/api/leaderboards/", response_model=LeaderboardsOut)
def leaderboard_list(queries: LeaderboardQueries = Depends()):
    return {
        "leader_boards": queries.get_all(),
    }


@router.put("/api/leaderboards/", response_model=LeaderboardOut)
def update_leaderboard(
    leaderboard_id: int,
    leaderboard: LeaderboardUpdate,
    response: Response,
    queries: LeaderboardQueries = Depends(),
):
    record = queries.get_by_id(leaderboard_id)
    if record is None:
        response.status_code = status.HTTP_404_NOT_FOUND
    else:
        updated_leaderboard = queries.update(
            leaderboard_id, leaderboard.dict()
        )
        return updated_leaderboard


@router.post("/api/leaderboards", response_model=Union[LeaderboardOut, Error])
def create_leaderboard(
    leaderboard: LeaderboardIn,
    response: Response,
    queries: LeaderboardQueries = Depends(),
):
    record = queries.create_leaderboard(leaderboard)
    if record is None:
        response.status_code = 404
    return record
