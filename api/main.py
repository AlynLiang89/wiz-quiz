from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from authenticator import authenticator
from routers import accounts


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


# # Load data from questions.json file
# with open('data/wizquiz.sql', 'r') as file:
#     contents = file.read()
#     data = json.loads(contents)

# # GET all questions
# @app.get("/questions")
# async def get_questions():
#     return data

# # GET a specific question by ID
# @app.get("/questions/{question_id}")
# async def get_question(question_id: str):
#     for question in data:
#         if question['id'] == question_id:
#             return question
#     return {"error": "Question not found"}

# # POST a new question
# @app.post("/questions")
# async def create_question(new_question: dict):
#     data.append(new_question)
#     with open('data/wizquiz.sql', 'w') as file:
#         file.write(json.dumps(data, indent=2))
#     return {"message": "Question created successfully"}

# # DELETE a question by ID
# @app.delete("/questions/{question_id}")
# async def delete_question(question_id: str):
#     global data
#     data = [question for question in data if question['id'] != question_id]
#     with open('data/wizquiz.sql', 'w') as file:
#         file.write(json.dumps(data, indent=2))
#     return {"message": "Question deleted successfully"}
