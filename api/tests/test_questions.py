from fastapi.testclient import TestClient
from main import app
from queries.questions import QuestionQueries


client = TestClient(app=app)


class EmptyQuestionQueries:
    def get_questions(self):
        return []

def test_get_all_questions():
    #Arrange
    app.dependency_overrides[QuestionQueries] = QuestionQueries

    response = client.get("/api/questions")

    #Act
    app.dependency_overrides = {}

    assert response.status_code == 200

    #Assert

def test_init():
    assert 1 == 1
