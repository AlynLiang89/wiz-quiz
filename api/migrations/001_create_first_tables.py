steps = [
    [
        """
        CREATE TABLE accounts (
            id SERIAL PRIMARY KEY NOT NULL,
            avatar_img VARCHAR(1000) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            username VARCHAR(255)  NOT NULL,
            password TEXT NOT NULL
        );
        """,
        """
        DROP TABLE accounts;
        """,
    ],

[
        """
        CREATE TABLE questions (
            id SERIAL PRIMARY KEY NOT NULL,
            question VARCHAR(1000) NOT NULL,
            answer VARCHAR(1000) NOT NULL,
            option_1 VARCHAR(1000) NOT NULL,
            option_2 VARCHAR(1000) NOT NULL,
            option_3 VARCHAR(1000) NOT NULL
        );
        """,
        """
        DROP TABLE questions;
        """,
    ],

[
        """
       CREATE TABLE leaderboard (
            id SERIAL PRIMARY KEY NOT NULL,
            account_id INTEGER NOT NULL REFERENCES accounts("id") ON DELETE CASCADE,
            score INTEGER NOT NULL
        );
        """,
        """
        DROP TABLE leaderboard;
        """,
    ],

]
