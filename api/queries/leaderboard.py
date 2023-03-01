from typing import Optional, Union, List
from queries.pool import pool
from pydantic import BaseModel


class Error(BaseModel):
    message: str

class LeaderboardIn(BaseModel):
    account_id: int
    score: int


class LeaderboardOut(BaseModel):
    username: str
    avatar_img: str
    score: int


class LeaderboardOuter(BaseModel):
     id: int
     account_id: int
     score: int




class LeaderboardQueries:
    def get_all(self) -> Union[Error, List[LeaderboardOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT username, avatar_img, score
                        FROM leaderboard
                        LEFT JOIN accounts ON leaderboard.account_id=accounts.id
                        ORDER BY leaderboard.score DESC;
                        """
                    )
                    return [
                        self.record_to_leaderboard_out(record)
                        for record in result
                    ]
        except Exception as e:
            print(e)
            return {"message": "Could not get all leaderboards"}


    def create(self, leaderboard: LeaderboardIn) -> Union[LeaderboardOuter, Error]:
                print(leaderboard, "BEFORETRY")
                try:
                    print(leaderboard, "AFTERTRY")
                    with pool.connection() as conn:
                        print("LINE49")
                        with conn.cursor() as db:
                            print('LINE51')
                            result = db.execute(
                                """
                                INSERT INTO leaderboard(
                                    account_id,
                                    score
                                )
                                VALUES
                                    (%s, %s)
                                RETURNING id;
                                """,
                                [
                                    leaderboard.account_id,
                                    leaderboard.score
                                ]
                            )
                            print(result, "RESULT")
                            id = result.fetchone()[0]
                            print(leaderboard, "CREATELEADERBOARD")
                            return self.leaderboard_in_to_out(id, leaderboard)
                except Exception:
                    return {"message": "Create did not work"}


    def record_to_leaderboard_out(self, record):
        return LeaderboardOut(
            username=record[0],
            avatar_img=record[1],
            score=record[2],
        )


    def leaderboard_in_to_out(self, id: int, leaderboard: LeaderboardIn):
         old_data = leaderboard.dict()
         print(old_data, "OLD_DATA")
         return LeaderboardOut(id=id, **old_data)
