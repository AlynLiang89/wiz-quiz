# APIs

## Accounts

![accounts](apidesign/getmap.PNG)
![accounts](apidesign/getmap1.PNG)

```json
{
  "email": "string",
  "username": "string",
  "password": "string",
  "avatar_img": "string"
}
```

## Tokens

![tokens](apidesign/getmap.PNG)
![tokens](apidesign/getmap1.PNG)

```json GET
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

```json POST
{
  "access_token": "string",
  "token_type": "Bearer"
}
```

## Questions

![questions](apidesign/getmap.PNG)
![questions](apidesign/getmap1.PNG)

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

![leader-board](apidesign/getmap.PNG)
![leader-board](apidesign/getmap1.PNG)

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
