from typing import Union, List
from queries.pool import pool
from pydantic import BaseModel


class Error(BaseModel):
    message: str


class LeaderboardIn(BaseModel):
    account_id: int


class LeaderboardOut(BaseModel):
    id: int


class LeaderboardGoingOut(BaseModel):
    username: str
    avatar_img: str | None = None
    score: int | None = None


class LeaderboardQueries:
    def get_all(self) -> Union[Error, List[LeaderboardGoingOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT *
                        FROM leaderboard
                        LEFT JOIN accounts ON leaderboard.account_id=accounts.id
                        ORDER BY accounts.score DESC;
                        """
                    )
                    return [
                        self.record_to_leaderboard_out(record)
                        for record in result
                    ]
        except Exception as e:
            return {"message": "Could not get all leaderboards"}

    def create_leaderboard(
        self, leaderboard: LeaderboardIn
    ) -> Union[LeaderboardOut, Error]:
        try:
            id = None
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO leaderboard(
                            account_id
                        )
                        VALUES
                            (%s)
                        RETURNING id;
                        """,
                        [leaderboard.account_id],
                    )
                    id = result.fetchone()[0]
                    old_data = leaderboard.dict()
                    return LeaderboardOut(id=id, **old_data)
        except Exception:
            return {"message": "Create did not work"}

    def record_to_leaderboard_out(self, record):
        return LeaderboardGoingOut(
            username=record[0],
            avatar_img=record[1],
            score=record[2],
        )
