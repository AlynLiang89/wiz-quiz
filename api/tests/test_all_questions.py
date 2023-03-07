from fastapi.testclient import TestClient
from main import app
from queries.questions import QuestionQueries


client = TestClient(app=app)
questions = [{'id': 1, "question": "strsdfadf", "answer": "strasfd43", "option_1": "strdfad", "option_2": "stssssr", "option_3": "stsr"}]

class MockQuestionQueries:
    def get_all(self):
        return [question for question in questions]


def test_get_all_questions():
    app.dependency_overrides[QuestionQueries] = MockQuestionQueries
    response = client.get("/api/questions")
    assert response.status_code == 200
    app.dependency_overrides = {}

def test_init():
    assert 1 == 1
