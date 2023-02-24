DROP TABLE IF EXISTS accounts;
DROP TABLE IF EXISTS questions;

CREATE TABLE accounts (
            id SERIAL PRIMARY KEY NOT NULL,
            avatar_img VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            username VARCHAR(255)  NOT NULL,
            password TEXT NOT NULL
        );

CREATE TABLE questions (
            id SERIAL PRIMARY KEY NOT NULL,
            question VARCHAR(1000) NOT NULL,
            answer VARCHAR(1000) NOT NULL,
            option_1 VARCHAR(1000) NOT NULL,
            option_2 VARCHAR(1000) NOT NULL,
            option_3 VARCHAR(1000) NOT NULL
        );


INSERT INTO accounts VALUES
  (1, '1780000.jpeg', 'David@aol.com', 'DavReg', 'test'),
  (2, '178030988.jpeg', 'Gio@hotmail.com', 'Gio', 'test'),
  (3, '17800.jpeg', 'chrissy@yahoo.com', 'cupcake', 'test'),
  (4, '10000.jpeg', 'sean@gmail.com', 'funwithmckee', 'test'),
  (5, '170000.jpeg', 'christian@gmail.com', 'bare', 'test'),
  (6, '1678000.jpeg', 'alyn@aol.com', 'Drilleranew', 'test');


INSERT INTO questions VALUES

  (1, 'Whats the name of the skyscraper in Die Hard?', 'Nakatomi Plaza', 'Naturo Highrise', 'Empire State Building', 'Sony Headquarters'),
  (2, 'For what movie did Steven Spielberg win his first Oscar for Best Director?', 'Schindlers List', 'Saving Private Ryan', 'Lincoln', 'Raiders of the Lost Ark'),
  (3, 'Who is the only actor to receive an Oscar nomination for acting in a Lord of the Rings movie?', 'Ian Mckellen', 'Sean Bean', 'Andy Serkis', 'Elijah Wood'),
  (4, 'Who wrote the theme music from Halloween?', 'John Carpenter', 'John Doe', 'John Denver', 'John Lennon'),
  (5, 'What is the name of Quints shark-hunting boat in Jaws?', 'The Orca', 'Two Ladies from Spain', 'The Dolls Eyes', 'The White Whale'),
  (6, 'In the action thriller Speed, why is Annie (Sandra Bullock)s drivers license suspended?', 'Speeding', 'Reckless Driving', 'Rolling Stop', 'Illegal Turn'),
  (7, 'The Battle of Thermopylae served as the basis of what highly stylized 2006 action flick?', '300', 'Meet the Spartans', 'Movie 42', 'Rocky'),
  (8, 'Who wrote the screenplay for Rocky?', 'Sylvester Stallone', 'Bullwinkle', 'Arnold Schwarzenegger', 'Jean-Claude Van Damme');



SELECT setval('accounts_id_seq', (SELECT MAX(id) + 1 FROM accounts));
SELECT setval('questions_id_seq', (SELECT MAX(id) + 1 FROM questions));
