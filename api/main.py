from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from authenticator import authenticator
from routers import accounts, questions, leaderboard

# import os


app = FastAPI()

# origins = [
<<<<<<< HEAD
    # "https://wizquiz.gitlab.io",
    # "http://localhost",
    # "http://localhost:3000",
    # os.environ.get("CORS_HOST", None),
=======
# "https://wizquiz.gitlab.io",
# "http://localhost",
# "http://localhost:3000",
# os.environ.get("CORS_HOST", None),
>>>>>>> 82dfbcf17d11aa32ecd0c8616735bfbfee8661b4
# ]

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(accounts.router)
app.include_router(questions.router)
app.include_router(authenticator.router)
app.include_router(leaderboard.router)
