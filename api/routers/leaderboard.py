from queries.questions import LeaderboardQueries, Leaderboard
from fastapi import APIRouter, Depends, Response, status
from pydantic import BaseModel



router = APIRouter()


class LeaderboardIn(BaseModel):
    account: str
    score: str

class LeaderboardUpdate(BaseModel):
    account: str
    score: str


class LeaderboardOut(BaseModel):
    rank: int
    account: str
    score: str


class LeaderboardsOut(BaseModel):
    leader_boards: list[Leaderboard]


@router.get("/api/leaderboards", response_model=Leaderboard)
def get_leaderboard(
    leaderboard_id: int,
    response: Response,
    queries: LeaderboardQueries = Depends(),
):
    record = queries.get_by_id(leaderboard_id)
    if record is None:
        response.status_code = status.HTTP_404_NOT_FOUND
    else:
        return record

@router.put("/api/leaderboards", response_model=LeaderboardOut)
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
        updated_leaderboard = queries.update(leaderboard_id, leaderboard.dict())
        return updated_leaderboard
