# APIs

## Accounts

![accounts](apidesign\getaccountslist.png)
![accounts](apidesign\postcreateaccount.png)
![accounts](apidesign\putupdateaccount.png)

```json
{
  "email": "string",
  "username": "string",
  "password": "string",
  "avatar_img": "string"
}
```

## Tokens

![tokens](apidesign\gettoken.png)

```json
{
  "access_token": "string",
  "token_type": "Bearer",
  "account": {
    "id": 0,
    "email": "string",
    "username": "string",
    "avatar_img": "string"
  }
}
```

## Questions

![questions](apidesign\deletequestion.png)
![questions](apidesign\getquestion.png)
![questions](apidesign\postcreatequestion.png)
![questions](apidesign\putupdatequestion.png)

```json
{
  "id": 0,
  "question": "string",
  "answer": "string",
  "option_1": "string",
  "option_2": "string",
  "option_3": "string"
}
```

## Leader-board

![leader-board](apidesign\getleaderboardlist.png)
![leader-board](apidesign\postcreateleaderboard.png)
![leader-board](apidesign\putupdateleaderboard.png)

```json
{
  "leader_boards": [
    {
      "username": "string",
      "avatar_img": "string",
      "score": 0
    }
  ]
}
```
