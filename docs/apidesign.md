# APIs

# wizquiz

## Accounts

![accounts](https://i.imgur.com/ru8Y2g1.png) - GET
![accounts](https://i.imgur.com/xBi0uGk.png) - DELETE
![accounts](https://i.imgur.com/t8hGmiG.png) - PUT
![accounts](https://i.imgur.com/xUaBQ2c.png) - POST

```json
{
  "email": "string",
  "username": "string",
  "password": "string",
  "avatar_img": "string"
}
```

## Tokens

![tokens](https://i.imgur.com/4sOIHFz.png) - GET
![tokens](https://i.imgur.com/cQx9GSt.png) - DELETE

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

![questions](https://i.imgur.com/nkVlRaI.png) - DELETE
![questions](https://i.imgur.com/X6aIT0u.png) - GET question list
![questions](https://i.imgur.com/9jQiE3V.png) - POST
![questions](https://i.imgur.com/Z1Pb2Bf.png) - PUT
![questions](https://i.imgur.com/xN79eIu.png) - GET Question by i.d.

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

![leader-board](https://i.imgur.com/oxCcSRy.png) - GET
![leader-board](https://i.imgur.com/huOmkHd.png) - POST
![leader-board](https://i.imgur.com/YIzVRVk.png) - PUT

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
