# from fastapi.testclient import TestClient
# from main import app
# from queries.accounts import AccountQueries


# client = TestClient(app)
# accounts = [{"id": 11, "email": "test@teeeest.gov", "username": "oingo boingo", "password": "test", "avatar_img": "1230982.23904"}]

# class MockAccountQueries:
#     def get_all(self):
#         return [account for account in accounts]


# def test_get_all_accounts():
#     app.dependency_overrides[AccountQueries] = MockAccountQueries
#     response = client.get("/api/accounts")
#     assert response.status_code == 200
#     app.dependency_overrides = {}

# def test_init():
#     assert 1 == 1
