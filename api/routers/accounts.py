from typing import Union
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
    Error,
    AccountIn,
    AccountOut,
    AccountQueries,
    DuplicateAccountError,
)

class AccountForm(BaseModel):
    username: str
    password: str

class AccountToken(Token):
    account: AccountOut

class HttpError(BaseModel):
    detail: str

router = APIRouter()


@router.post("/accounts", response_model=AccountToken | HttpError)
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    accounts: AccountQueries = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)
    print(hashed_password, "\nTHIS IS HASHED PASSWORD")
    try:
        account = accounts.create(info, hashed_password)
        print(account, "\n\n\nTHIS IS ACCOUNT")
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
    form = AccountForm(username=info.email, password=info.password)
    token = await authenticator.login(response, request, form, accounts)
    return AccountToken(account=account, **token.dict())


@router.get("/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: AccountIn = Depends(authenticator.try_get_current_account_data)
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }


@router.get("/protected", response_model=bool)
async def get_protected(
    account_data: dict = Depends(authenticator.get_current_account_data)
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
