from fastapi.testclient import TestClient
from main import app
from queries.accounts import AccountQueries
from authenticator import authenticator


client = TestClient(app)
test_user = {
    "id": 42,
    "email": "emailll@email.email",
    "username": "dummydata",
    "avatar_img": "12321312",
    "score": 30
}


class TestAccountQueries:
    def get_all_accounts(self):
        return [test_user]


def accounts_override():
    return test_user


def test_get_all_accounts():
    app.dependency_overrides[AccountQueries] = TestAccountQueries
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = accounts_override
    response = client.get("/accounts")
    assert response.json() == {"accounts": [test_user]}
    assert response.status_code == 200
    app.dependency_overrides = {}


def test_init():
    assert 1 == 1
