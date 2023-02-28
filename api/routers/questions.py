from queries.questions import QuestionQueries, Question
from fastapi import APIRouter, Depends, Response, status
from pydantic import BaseModel



router = APIRouter()


class QuestionIn(BaseModel):
    question: str
    answer: str
    option_1: str
    option_2: str
    option_3: str


class QuestionUpdate(BaseModel):
    question: str
    answer: str
    option_1: str
    option_2: str
    option_3: str


class QuestionOut(BaseModel):
    id: int
    question: str
    answer: str
    option_1: str
    option_2: str
    option_3: str


class QuestionsOut(BaseModel):
    questions: list[Question]


@router.get("/questions", response_model=QuestionsOut)
def questions_list(queries: QuestionQueries = Depends()):
    return {
        "questions": queries.get_all(),
    }


@router.get("/questions/{question_id}", response_model=Question)
def get_question(
    question_id: int,
    response: Response,
    queries: QuestionQueries = Depends(),
):
    record = queries.get_by_id(question_id)
    if record is None:
        response.status_code = status.HTTP_404_NOT_FOUND
    else:
        return record


@router.put("/questions/{question_id}", response_model=QuestionOut)
def update_question(
    question_id: int,
    question: QuestionUpdate,
    response: Response,
    queries: QuestionQueries = Depends(),
):
    record = queries.get_by_id(question_id)
    if record is None:
        response.status_code = status.HTTP_404_NOT_FOUND
    else:
        updated_question = queries.update(question_id, question.dict())
        return updated_question


@router.delete("/questions/{question_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_question(
    question_id: int,
    response: Response,
    queries: QuestionQueries = Depends(),
):
    record = queries.get_by_id(question_id)
    if record is None:
        response.status_code = status.HTTP_404_NOT_FOUND
    else:
        queries.delete(question_id)

@router.post("/questions", response_model=QuestionOut)
def create_question(
    question: QuestionIn,
    response: Response,
    queries: QuestionQueries = Depends(),
):
    record = queries.create(question.dict())
    response.status_code = status.HTTP_201_CREATED
    print ("THE QUESTION WAS CREATED")
    return record
