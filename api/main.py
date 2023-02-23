from fastapi import FastAPI
from authenticator import authenticator
from routers import accounts
import json

app = FastAPI()
app.include_router(authenticator.router)
app.include_router(accounts.router)


# Load data from questions.json file
with open('ghi/src/questions.json', 'r') as file:
    contents = file.read()
    data = json.loads(contents)

# GET all questions
@app.get("/questions")
async def get_questions():
    return data

# GET a specific question by ID
@app.get("/questions/{question_id}")
async def get_question(question_id: str):
    for question in data:
        if question['id'] == question_id:
            return question
    return {"error": "Question not found"}

# POST a new question
@app.post("/questions")
async def create_question(new_question: dict):
    data.append(new_question)
    with open('ghi/src/questions.json', 'w') as file:
        file.write(json.dumps(data, indent=2))
    return {"message": "Question created successfully"}

# DELETE a question by ID
@app.delete("/questions/{question_id}")
async def delete_question(question_id: str):
    global data
    data = [question for question in data if question['id'] != question_id]
    with open('ghi/src/questions.json', 'w') as file:
        file.write(json.dumps(data, indent=2))
    return {"message": "Question deleted successfully"}
