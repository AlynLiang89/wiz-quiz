from fastapi.testclient import TestClient
from main import app
from queries.leaderboard import LeaderboardQueries


client = TestClient(app)


def test_get_all_leaderboards():
    app.dependency_overrides[LeaderboardQueries] = LeaderboardQueries

    response = client.get("/api/leaderboards/")

    app.dependency_overrides = {}

    assert response.status_code == 200


def test_init():
    assert 1 == 1
