from queries.leaderboard import LeaderboardQueries, LeaderboardOut, LeaderboardIn, LeaderboardOuter
from fastapi import APIRouter, Depends, Response, status
from pydantic import BaseModel
router = APIRouter()
class LeaderboardUpdate(BaseModel):
    account: int
    score: int
class LeaderboardsOut(BaseModel):
    leader_boards: list[LeaderboardOut]
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
        updated_leaderboard = queries.update(leaderboard_id, leaderboard.dict())
        return updated_leaderboard
@router.post("/api/leaderboards/", response_model=LeaderboardOuter)
def create_leaderboard(
    leaderboard: LeaderboardIn,
    response: Response,
    queries: LeaderboardQueries = Depends(),
):
    print(leaderboard.dict(),"LEADERBOARD")
    record = queries.create(leaderboard.dict())
    response.status_code = status.HTTP_201_CREATED
    return record
