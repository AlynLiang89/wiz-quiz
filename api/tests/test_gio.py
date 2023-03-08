from main import app
from fastapi.testclient import TestClient
from queries.questions import QuestionQueries
client = TestClient(app)
class PostCreateQuestionQueries:
    def create(self, question):
        result = {
            "question": "string",
            "answer": "string",
            "option_1": "string",
            "option_2": "string",
            "option_3": "string",
        }
        result.post(question)
        return result
def post_create_question():
    app.dependency_overrides[QuestionQueries] = PostCreateQuestionQueries
    json = {
        "question": "which of these pokemons were caught first by ash",
        "answer": "caterpie",
        "option_1": "pikachi",
        "option_2": "turtwig",
        "option_3": "charmander",
    }
    expected = {
        "detail": [
        {
            "loc": [
                "string",
                0
        ],
        "msg": "string",
        "type": "string"
    }
  ]
}
    response = client.post("/api/questions/", json=json)
    app.dependency_overrides = {}
    assert response.status_code == 200
    assert response.json() == expected
def test_init():
    assert 1 == 1
