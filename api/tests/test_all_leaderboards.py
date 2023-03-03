from fastapi.testclient import TestClient
from main import app
from queries.leaderboard import LeaderboardQueries


client = TestClient(app)


def test_get_all_leaderboards():
    # Arrange
    app.dependency_overrides[LeaderboardQueries] = LeaderboardQueries

    response = client.get("/api/leaderboards/")

     # Act
    app.dependency_overrides = {}

    assert response.status_code == 200

    # Assert


def test_init():
    assert 1 == 1
