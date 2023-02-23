import QuestionsQueries
from fastapi import APIRouter, Depends, Response
from pydantic import BaseModel


router = APIRouter()


class QuestionIn(BaseModel):
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
    questions: list[QuestionOut]


# @router.get("/api/questions", response_model=QuestionsOut)
# def questions_list(queries: QuestionsQueries = Depends()):
#     return {
#         "questions": queries.get_all_questions(),
#     }


@router.get("/api/questions/{question_id}", response_model=QuestionOut)
def get_question(
    question_id: int,
    response: Response,
    queries: QuestionsQueries = Depends(),
):
    record = queries.get_question(question_id)
    if record is None:
        response.status_code = 404
    else:
        return record
