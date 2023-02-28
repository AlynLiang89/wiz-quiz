steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE users (
            id SERIAL PRIMARY KEY NOT NULL,
            avatar_img() NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            username VARCHAR(255)  NOT NULL,
            password TEXT NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE users;
        """,
    ]

    [
        # "Up" SQL statement
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
        # "Down" SQL statement
        """
        DROP TABLE users;
        """,
    ]

]