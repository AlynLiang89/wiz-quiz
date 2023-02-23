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

]
