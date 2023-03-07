from typing import Optional, Union, List
from queries.pool import pool
from pydantic import BaseModel


class Error(BaseModel):
    message: str


class DuplicateAccountError(ValueError):
    pass


class AccountIn(BaseModel):
    email: str
    username: str
    password: str
    avatar_img: str | None = None


class AccountOut(BaseModel):
    id: int
    email: str
    username: str
    avatar_img: str | None = None


class AccountsOut(BaseModel):
    accounts: list[AccountOut]


class AccountOutWithPassword(AccountOut):
    hashed_password: str


class AccountQueries:
    def get(self, username: str) -> Optional[AccountOutWithPassword]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                            , email
                            , username
                            , password
                            , avatar_img
                        FROM accounts
                        WHERE username = %s
                        """,
                        [username],
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_account_out(record)
        except Exception as e:
            return {"message": "Could not get that account"}

    def get_by_id(self, user_id: int) -> Optional[AccountOutWithPassword]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                            , email
                            , username
                            , password
                            , avatar_img
                        FROM accounts
                        WHERE id = %s
                        """,
                        [user_id],
                    )
                    record = result.fetchone()

                    if record is None:
                        return None
                    return self.record_to_account_out(record)
        except Exception as e:
            return {"message": "Could not get that account"}

    def get_all(self) -> Union[Error, List[AccountOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT id
                            , email
                            , username
                            , password
                            , avatar_img
                        FROM accounts
                        ORDER BY username;
                        """
                    )
                    return [
                        AccountOut(
                            id=record[0],
                            first_name=record[1],
                            last_name=record[2],
                            email=record[3],
                            username=record[4],
                            avatar_img=record[5],
                        )
                        for record in db
                    ]
        except Exception as e:
            return {"message": "Could not get all accounts"}

    def update(
        self, user_id: int, account: AccountOut, hashed_password: str
    ) -> Union[AccountOutWithPassword, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE accounts
                        SET email = %s
                         , username = %s
                         , password = %s
                         , avatar_img = %s
                        WHERE id = %s
                        """,
                        [
                            account.email,
                            account.username,
                            hashed_password,
                            account.avatar_img,
                            user_id,
                        ],
                    )

                    old_data = account.dict()
                    return AccountOut(id=user_id, **old_data)
        except Exception as e:
            return {"message": "Could not update account."}

    def delete(self, user_id: int):
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM accounts
                        WHERE id = %s
                        """,
                        [user_id],
                    )
                    return True
        except Exception as e:
            return {"message": "Could not delete account."}

    def create(
        self, info: AccountIn, hashed_password: str
    ) -> AccountOutWithPassword:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO accounts
                            (email, username, password, avatar_img)
                        VALUES
                            (%s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            info.email,
                            info.username,
                            hashed_password,
                            info.avatar_img,
                        ],
                    )
                    id = result.fetchone()[0]
                    old_data = info.dict()

                    return AccountOutWithPassword(
                        id=id, hashed_password=hashed_password, **old_data
                    )

        except Exception:
            return {"message": "Create did not work"}

    def account_in_to_out(
        self, id: int, account: AccountIn, hashed_password: str
    ):
        old_data = account.dict()
        return AccountOutWithPassword(
            id=id, hashed_password=hashed_password, **old_data
        )

    def record_to_account_out(self, record):
        return AccountOutWithPassword(
            id=record[0],
            email=record[1],
            username=record[2],
            hashed_password=record[3],
            avatar_img=record[4],
        )

    def get_all_accounts(self):
        try:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    cur.execute(
                        """
                        SELECT id, email, username, avatar_img
                        FROM accounts
                        ORDER BY id;
                    """
                    )
                    return [
                        AccountOut(
                            id=record[0],
                            email=record[1],
                            username=record[2],
                            avatar_img=record[3],
                        )
                        for record in cur
                    ]
        except Exception:
            return {"message": "Could not get all accounts"}
