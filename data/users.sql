DROP TABLE IF EXISTS users;

CREATE TABLE users (
            id SERIAL PRIMARY KEY NOT NULL,
            avatar_img VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            username VARCHAR(255)  NOT NULL,
            password TEXT NOT NULL
        );

INSERT INTO users VALUES
  (1, '1780000.jpeg', 'David@gmail.com', 'DavReg', 'test'),
  (2, '178030988.jpeg', 'Dave@gmail.com', 'Djones', 'test'),
  (3, '17800.jpeg', 'Patrick@gmail.com', 'Placquer', 'test'),
  (4, '10000.jpeg', 'Abbie@gmail.com', 'Aschabbie', 'test'),
  (5, '170000.jpeg', 'David@gmail.com', 'Dagarwal', 'test');





SELECT setval('users_id_seq', (SELECT MAX(id) + 1 FROM users));
