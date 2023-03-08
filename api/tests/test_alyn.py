from fastapi.testclient import TestClient
from main import app
from queries.questions import QuestionQueries


client = TestClient(app)


class CreateQuestionQueries:
    def create(self, question):
        result = {
            "question": "string",
            "answer": "string",
            "option_1": "string",
            "option_2": "string",
            "option_3": "string",
        }

        result.update(question)
        return result


def test_question_create():

    app.dependency_overrides[QuestionQueries] = CreateQuestionQueries

    json = {
        "question": "Who voiced Batman in the 1992 Batman the animated series?",
        "answer": "Kevin Conroy",
        "option_1": "Peter Cullen",
        "option_2": "David Kayne",
        "option_3": "Gary Chaulk",
    }

    expected = {
        "id": None,
        "question": "Who voiced Batman in the 1992 Batman the animated series?",
        "answer": "Kevin Conroy",
        "option_1": "Peter Cullen",
        "option_2": "David Kayne",
        "option_3": "Gary Chaulk",
    }

    response = client.post("/api/questions/", json=json)

    app.dependency_overrides = {}

    assert response.status_code == 201

    assert response.json() == expected


def test_init():
    assert 1 == 1
