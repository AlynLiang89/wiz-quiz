import os
from fastapi import Depends
from jwtdown_fastapi.authentication import Authenticator
from queries.accounts import AccountQueries, AccountOut, AccountOutWithPassword


class MyAuthenticator(Authenticator):
    async def get_account_data(
        self,
        username: str,
        accounts: AccountQueries,
    ):
        return accounts.get(username)

    def get_account_getter(
        self,
        accounts: AccountQueries = Depends(),
    ):
        return accounts

    def get_hashed_password(self, account: AccountOutWithPassword):
        return account.hashed_password

    def get_account_data_for_cookie(self, account: AccountOut):
        return account.username, AccountOut(**account.dict())


authenticator = MyAuthenticator(os.environ["SIGNING_KEY"])











# import os
# import jwt
# from jwtdown_fastapi.authentication import Authenticator
# from fastapi import Depends, HTTPException
# from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

# SECRET_KEY = "WE NEED A KEY"

# authenticator_scheme = HTTPBearer

# class QuizAuthenticator(Authenticator):
#     async def get_account_data(self):
#         pass

#     def get_account_getter(self):
#         pass

#     def get_hashed_password(self):
#         pass

#     def get_account_data_for_cookie(self):
#         pass

#     def verify_token(token: str):
#         try:
#             payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
#             user_id = payload.get("sub")
#             if not user_id:
#                 raise HTTPException(status_code=401, detail="Invalid token")
#             return user_id
#         except jwt.JWTError:
#             raise HTTPException(status_code=401, detail="Invalid token")

#     def authenticate_user(token: HTTPAuthorizationCredentials = Depends(auth_scheme)):
#         return verify_token(token.credentials)
#     # A secret key (SECRET_KEY) used to sign and verify JWT tokens
#     # An authentication scheme (auth_scheme) that uses the HTTP Bearer Token
#     # mechanism to extract tokens from requests
#     # A verify_token function that decodes the token and returns the user
#     # ID if the token is valid
#     # A authenticate_user dependency that uses the authentication scheme
#     # to extract and verify the token, and return the user ID

# authenticator = QuizAuthenticator(os.environ["SIGNING_KEY"])
