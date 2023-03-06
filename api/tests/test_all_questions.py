from fastapi.testclient import TestClient
from main import app
from queries.questions import QuestionQueries


client = TestClient(app=app)


def test_get_all_questions():
    app.dependency_overrides[QuestionQueries] = QuestionQueries

    response = client.get("/api/questions")

    app.dependency_overrides = {}

    assert response.status_code == 200

def test_init():
    assert 1 == 1
