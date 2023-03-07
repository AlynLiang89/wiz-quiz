# Schemas

## Accounts Table

| accounts   | type        |
| ---------- | ----------- |
| id         | PRIMARY KEY |
| avatar_img | VARCHAR     |
| email      | VARCHAR     |
| username   | VARCHAR     |
| score      | INTEGER     |
| password   | Not Null    |

---

## Questions Table

| questions | type        |
| --------- | ----------- |
| id        | PRIMARY KEY |
| question  | VARCHAR     |
| answer    | VARCHAR     |
| option_1  | VARCHAR     |
| option_2  | VARCHAR     |
| option_3  | VARCHAR     |

---

## Leaderboard Table

| leaderboard | type        |
| ----------- | ----------- |
| id          | PRIMARY KEY |
| account_id  | INTEGER     |
