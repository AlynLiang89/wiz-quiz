from queries.questions import QuestionQueries, Question, Error
from fastapi import APIRouter, Depends, Response, status
from pydantic import BaseModel
from typing import Optional


router = APIRouter()


class QuestionIn(BaseModel):
    question: str
    answer: str
    option_1: str
    option_2: str
    option_3: str


class QuestionOut(BaseModel):
    id: Optional[int] = None
    question: str
    answer: str
    option_1: str
    option_2: str
    option_3: str


class QuestionsOut(BaseModel):
    questions: list[Question]


@router.get("/api/questions", response_model=QuestionsOut)
def questions_list(queries: QuestionQueries = Depends()):
    return {
        "questions": queries.get_all(),
    }


@router.get("/api/questions/{question_id}", response_model=Question)
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


@router.put("/api/questions/{question_id}", response_model=QuestionOut)
def update_question(
    question_id: int,
    question: QuestionIn,
    response: Response,
    queries: QuestionQueries = Depends(),
):
    updated_question = queries.update(question_id, question)
    if isinstance(updated_question, Error):
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": updated_question.message}
    else:
        return updated_question


@router.delete(
    "/api/questions/{question_id}", status_code=status.HTTP_204_NO_CONTENT
)
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


@router.post("/api/questions/", response_model=QuestionOut)
def create_question(
    question: QuestionIn,
    response: Response,
    queries: QuestionQueries = Depends(),
):
    new_question = Question(**question.dict())
    record = queries.create(new_question)
    response.status_code = status.HTTP_201_CREATED
    return record


