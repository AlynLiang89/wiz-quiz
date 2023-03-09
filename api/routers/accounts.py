from fastapi import (
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
    Depends,
)
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator
from pydantic import BaseModel
from queries.accounts import (
    AccountIn,
    AccountOut,
    AccountQueries,
    AccountsOut,
    DuplicateAccountError,
)


from queries.leaderboard import (
    LeaderboardIn,
    LeaderboardQueries,
)


class AccountForm(BaseModel):
    username: str
    password: str


class AccountToken(Token):
    account: AccountOut


class HttpError(BaseModel):
    detail: str


router = APIRouter()


@router.get("/accounts", response_model=AccountsOut)
def accounts_list(
    queries: AccountQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    if account_data:
        return {
            "accounts": queries.get_all_accounts(),
        }


@router.post("/accounts", response_model=AccountToken | HttpError)
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    accounts: AccountQueries = Depends(),
    leaderboard_queries: LeaderboardQueries = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)
    try:
        account = accounts.create(info, hashed_password)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
    form = AccountForm(username=info.username, password=info.password)
    token = await authenticator.login(response, request, form, accounts)
    leaderboard_queries.create_leaderboard(
        LeaderboardIn(account_id=account.id, score=0)
    )
    return AccountToken(account=account, **token.dict())


@router.get("/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: AccountIn = Depends(authenticator.try_get_current_account_data),
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }


@router.get("/protected", response_model=bool)
async def get_protected(
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return True


@router.put("/accounts/{user_id}")
def update_account(
    user_id: int,
    account: AccountIn,
    response: Response,
    repo: AccountQueries = Depends(),
    data: dict = Depends(authenticator.try_get_current_account_data),
):
    hashed_password = authenticator.hash_password(account.password)
    if data:
        return repo.update(user_id, account, hashed_password)
    else:
        response.status_code = 401
        return {"message": "invalid token"}


@router.delete("/accounts/{user_id}", response_model=bool)
def delete_user(
    user_id: int,
    queries: AccountQueries = Depends(),
    data: dict = Depends(authenticator.get_current_account_data),
):
    if data:
        return queries.delete(user_id)


@router.put("/accounts/{user_id}/score")
def update_score(
    user_id: int,
    score: int,
    response: Response,
    repo: AccountQueries = Depends(),
    data: dict = Depends(authenticator.try_get_current_account_data),
):
    if data:
        return repo.update_score(user_id, score)
    else:
        response.status_code = 401
        return {"message": "invalid token"}
