from fastapi.testclient import TestClient
from main import app
from queries.leaderboard import LeaderboardQueries


client = TestClient(app)
leaderboards = [{"username": "1", "avatar_img": "12321", "score": 1000},{"username": "3", "avatar_img": "11234", "score": 2000}]
class MockLeaderboardQueries:
    def get_all(self):
        return [leaderboard for leaderboard in leaderboards]

def test_get_all_leaderboards():
    app.dependency_overrides[LeaderboardQueries] = MockLeaderboardQueries
    response = client.get("/api/leaderboards/")
    assert response.status_code == 200
    app.dependency_overrides = {}


def test_init():
    assert 1 == 1
