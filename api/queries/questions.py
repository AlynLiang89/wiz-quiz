from typing import Optional, Union, List
from queries.pool import pool
from pydantic import BaseModel


class Error(BaseModel):
    message: str


class Question(BaseModel):
    id: Optional[int] = None
    question: str
    answer: str
    option_1: str
    option_2: str
    option_3: str


class QuestionQueries:
    def create(self, question: Question) -> Question:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        INSERT INTO questions (question, answer, option_1, option_2, option_3)
                        VALUES (%s, %s, %s, %s, %s)
                        RETURNING id
                        """,
                        [question.question, question.answer, question.option_1, question.option_2, question.option_3],
                    )
                    new_question = question.copy(update={"id": db.fetchone()[0]})
                    return new_question
        except Exception as e:
            print(e)
            return {"message": "Could not create question."}


    def get_by_id(self, question_id: int) -> Union[Error, Question]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT id, question, answer, option_1, option_2, option_3
                        FROM questions
                        WHERE id = %s
                        """,
                        [question_id],
                    )
                    record = db.fetchone()

                    if record is None:
                        return {"message": "Question not found."}
                    return Question(**dict(zip(["id", "question", "answer", "option_1", "option_2", "option_3"], record)))
        except Exception as e:
            print(e)
            return {"message": "Could not get question."}

    def get_all(self) -> Union[Error, List[Question]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT id, question, answer, option_1, option_2, option_3
                        FROM questions
                        """
                    )
                    print(List[Question])
                    return [Question(**dict(zip(["id", "question", "answer", "option_1", "option_2", "option_3"], record))) for record in db]
        except Exception as e:
            print(e)
            return {"message": "Could not get all questions."}


    def update(self, question_id: int, question: Question) -> Union[Question, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE questions
                        SET question = %s, answer = %s, option_1 = %s, option_2 = %s, option_3 = %s
                        WHERE id = %s
                        """,
                        [question.question, question.answer, question.option_1, question.option_2, question.option_3, question_id],
                    )
                    return question
        except Exception as e:
            print(e)

    def delete(self, question_id: int) -> Union[Error, str]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM questions
                        WHERE id = %s
                        """,
                        [question_id],
                    )
                    if db.rowcount == 0:
                        return {"message": "Question not found."}
                    return "Question deleted successfully."
        except Exception as e:
            print(e)
            return {"message": "Could not delete question."}
