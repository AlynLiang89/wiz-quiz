from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from authenticator import authenticator
from routers import accounts, questions, leaderboard


app = FastAPI()

origins = [
    "https://wizquiz.gitlab.io",
    "http://localhost",
    "http://localhost:3000",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



app.include_router(authenticator.router)
app.include_router(accounts.router)
app.include_router(questions.router)
app.include_router(leaderboard.router)
