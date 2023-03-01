DROP TABLE IF EXISTS accounts;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS leaderboard;


CREATE TABLE accounts (
            id SERIAL PRIMARY KEY NOT NULL,
            avatar_img VARCHAR(255) NULL,
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


CREATE TABLE leaderboard (
            id SERIAL PRIMARY KEY NOT NULL,
            account_id INTEGER NOT NULL REFERENCES accounts("id") ON DELETE CASCADE,
            score INTEGER NOT NULL
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
  (8, 'Who wrote the screenplay for Rocky?', 'Sylvester Stallone', 'Bullwinkle', 'Arnold Schwarzenegger', 'Jean-Claude Van Damme'),
  (9, 'What is the real name of Uma Thurmans "The Bride" character from Kill Bill?', 'Beatrix Kiddo', 'Luna Lovegood', 'Katherine Banks', 'Lady Death'),
  (10,'How many suns does Lukes home planet of Tatooine have in Star Wars?', '2', '1', '30', '3'),
  (11,'What Martin Scorsese movie holds the record for F-bombs?', 'The Wolf of Wall Street', 'Taxi Driver', 'Hugo', 'The Irishman'),
  (12,'What is the highest grossing horror of all time?', 'It', 'The Sixth Sense', 'Ghostbusters', 'Us'),
  (13,'In what movie did Bill Paxtons character cry out "Game over man, game over!"', 'Aliens', 'Nightcrawler', 'Twister', 'Tombstone'),
  (14,'In what movie did Bruce Campbells character say "Alright you primitive screwheads, listen up! See this? This is my boomstick!"', 'Evil Dead: Army of Darkness', 'Bubba Ho-Tep', 'Darkman', 'Spiderman 2'),
  (15,'Freddy Krueger wears a striped sweater of what two colors?', 'Red and Green', 'Ornage and Black', 'Purple and Yellow', 'Blue and Red'),
  (16,'If you were to watch the Marvel movies in chronological order, which one would you start with?', 'Captain America', 'Iron Man', 'Black Panther', 'Captain Marvel'),
  (17,'The dog in The Sandlots nickname is The Beast. What is its real name?', 'Hercules', 'Slobberboy', 'Tiamat', 'Homer'),
  (18,'Which professional athlete was considered for the lead in The Terminator?', 'O.J. Simpson', 'Mike Tyson', 'Tom Brady', 'Wayne Gretzky'),
  (19,'What are the names of Hades minions in Hercules?', 'Pain and Panic', 'Greed and Sloth', 'Muck and Mayhem', 'Grease and Wheel'),
  (20,'What was the first Pixar movie?', 'Toy Story', 'Finding Nemo', 'A Bugs Life', 'Monsters, INC'),
  (21,'Emperor Kuzco turns into what animal in The Emperors New Groove?', 'Llama', 'Bat', 'Horse', 'Panther'),
  (22,'What is the most toxic and deadly thing in Monsters, Inc. ?', 'A Child', 'Love', 'A Sock', 'Poison'),
  (23,'Who was the first cartoon character to get a star on the Hollywood Walk of Fame?', 'Mickey Mouse', 'Bugs Bunny', 'Optimus Prime', 'Jessica Rabbit'),
  (24,'Michael Myers mask in Halloween is of what actors face?', 'William Shatner', 'Bob Marley', 'Steve Jobs', 'Clint Eastwood'),
  (25,'How many people does John Wick kill in the movie John Wick?', '77', '35', '58', '42'),
  (26,'What role did Kurt Russel turn down to play as Jack Burton in Big Trouble in Little China?', 'Highlander', 'Soldier', 'Hateful 8', 'Deathproof'),
  (27,'What is the name of Jack Burtons truck in Big Trouble in Little China?', 'Porkchop Express', 'Lady in Red', 'Smashburger', 'Subs Tubs'),
  (28,'What movie had Adam Sandlers character marrying that of Drew Barrymore?', 'The Wedding Singer', '50 First Dates', 'Click', 'Little Nicky'),
  (29,'What South Korean thriller won an Academy Award for Best Picture, Best Directing, and Best Writing?', 'Parasite', 'Teeth', 'The Host', 'Okja'),
  (30,'What actor got his first major role in A Nightmare On Elm Street?', 'Johnny Depp', 'Billy Bob Thorton', 'Jason Momoa', 'Guy Ritchie'),
  (31,'How many movies does the MCU have?', '28', '20', '12', '45'),
  (32,'What day is Harry Potters birthday?', 'July 31, 1980', 'March 3, 1982', 'October 3, 1986', 'November 20, 1981'),
  (33,'What movie had costars Nicolas Cage, John Cusack, and John Malkovich?', 'Con Air', 'Gone in 60 Seconds', 'The Rock', 'Raising Arizona'),
  (34,'Which Disney character appeared in Frozen as a stuffed animal?', 'Mickey Mouse', 'Goofy', 'Ariel', 'Mulan'),
  (35,'What actress has won the most Academy Awards?', 'Katherine Hepburn', 'Glenn Close', 'Isabella Rossellini', 'Betty White'),
  (36,'Where was the Lord of the Rings trilogy filmed?', 'New Zealand', 'Germany', 'Australia', 'Ireland'),
  (37,'Who directed the film Psycho?', 'Alfred Hitchcock', 'Steven King', 'John Carpenter', 'Lewis Carol'),
  (38,'What film is the line, "Frankly Scarlet, I dont give a damn" from?', 'Gone with the Wind', 'Casablanca', 'The Postman Always Rings Twice', 'The Sound of Music'),
  (39,'What is the name of Thors Axe in the Marvel Universe?', 'Storm Breaker', 'Face Smasher', 'Ground Cleaver', 'Titan Bane'),
  (40,'What was the name of Maxs love interest in A Goofy Movie?', 'Roxanne', 'Rachel', 'Rose', 'River'),
  (41,'What illegal activity was Hiro participating in at the beginning of Big Hero 6?', 'Robot Fighting', 'Gambling', 'Racing', 'Vandalizing Property'),
  (42,'In The movie Pacific Rim, how many Kaiju kills does Striker Eureka have?', '11', '12', '10', '9'),
  (43,'What is Gohans Dragons name in Dragon Ball Z?', 'Icarus', 'Turtles', 'Daelgus', 'Porunga'),
  (44,'What is Bulmas last name in Dragon Ball?', 'Briefs', 'Boxers', 'Capsule', 'Lace'),
  (45,'What are the names of the Aliens on fake planet Namek in Dragon Ball Z?', 'Zaccro and Raiti', 'Cui and Pui Pui', 'Dora and Neiz', 'Rildo and Drildo'),
  (46,'Which one of these is not a member of Garlic Jrs Spice Boys?', 'Pepper', 'Salt', 'Vinegar', 'Mustard'),
  (47,'How did Lelouch come up with the name Lamperouge in Code Geass?', 'It was his mothers maiden name', 'It was inspired by Suzaku', 'He made it up', 'The Ashford family gave it to him'),
  (48,'Who rescued Princess Cornelia at Narita from Kallen and Zero in Code Geass?', 'Suzaku Kururugi', 'Andreas Dalton', 'Jeremiah Gottwald', 'Gilbert Guilford'),
  (49,'While Lelouch was at the Chinese Federation in the episode Power of Passion, who impersonated Lelouch at Ashford Academy in Code Geass?', 'Sayoko', 'Peco', 'Suzaku', 'Kallen'),
  (50,'Which Ashford Academy student council member was one of the terrorists Lelouch helped in Shinjuku in Code Geass?', 'Kallen', 'Mao', 'Anya', 'Gino'),
  (51,'Which one of these Nightmares is considered to be Generation 6?', 'Gawain', 'Gekka', 'MR-1', 'Burai'),
  (52,'From Austin Powers Finish this "Dont worry, things wont get..."', 'Weird', 'Freaky', 'Kinky', 'Tantric'),
  (53,'In the Matrix, what color pill does Neo take?', 'Red', 'Blue', 'Green', 'Orange'),
  (54,'In To Kill A Mockingbird what is the name of Scouts father?', 'Atticus', 'Jim', 'Paul', 'George'),
  (55,'Finish the line, "Austin, I am your..."', 'Father', 'Uncle', 'Mother', 'Brother'),
  (56,'For what movie did Tom Hanks receive his first Academy Award nomination?', 'Big', 'Forrest Gump', 'Youve got Mail', 'Toy Story'),
  (57,'In Ready Player One what is the name of the program the whole planet logs into daily?', 'The Oasis', 'Simulation Nation', 'Facebook', 'Parcivals Paradise'),
  (58,'What American writer/director starred in several iconic European-produced Spaghetti Westerns?', 'Clint Eastwood', 'John Wayne', 'George Clooney', 'Jeff Bridges'),
  (59,'Who played the Green Goblin in the 2002 Spider-Man', 'Willem Dafoe', 'Willem Dafriend', 'William Wallace', 'Willy'),
  (60,'What is the first fantasy movie to win Best Picture at the Oscars?', 'Lord of the Rings: The Return of the King', 'Stardust', 'Willow', 'Krull'),
  (61,'Who plays Duncan Idaho in 2021s Dune?', 'Jason Momoa', 'Patrick Steward', 'Mr. Potatohead', 'Christopher Lambert'),
  (62,'The Matrix code in The Matrix came from recipes for which kind of food?', 'Sushi', 'Crackers', 'Noodles', 'Oatmeal'),
  (63,'What was Scream originally called?', 'Scary Movie', 'I Know What You Did Last Summer', 'Run', 'Lights Out'),
  (64,'What was the name of the fashion line named after Derek Zoolander in Zoolander?', 'Derelicte', 'Trash Vogue', 'Zoolandish', 'Derekala'),
  (65,'Who directed Us?', 'Jordan Peele', 'Channing Tatum', 'Shaq', 'John Carpenter'),
  (66,'Which British comedian voiced Zazu in The Lion King(1994)?', 'Rowan Atkinson', 'Eddie Izzard', 'John Paul III', 'Augustus Gloop'),
  (67,'Which actor did Steven Spielberg originally want for the role of Dr. Alan Grant in Jurassic Park?', 'Harrison Ford', 'Jeff Goldblum', 'Hugh Grant', 'Bill Murray'),
  (68,'Who plays Captain Miller in Event Horizon?', 'Laurence Fishburne', 'Sam Neill', 'Eddie Murphy', 'Paul W.S. Anderson'),
  (69,'What American writer/director starred in several iconic European-produced Spaghetti Westerns?', 'Clint Eastwood', 'John Wayne', 'George Clooney', 'Jeff Bridges'),
  (70,'Who is the highest grossing director of all time?', 'Steven Spielberg', 'Quentin Tarantino', 'Christopher Nolan', 'James Cameron'),
  (71,'In Terminator 2, what is the license plate of the motorcycle the terminator used to rescue John Conner?', '9A7218', '9J4KJ2', '9YT635', '9MY763'),
  (72,'In Ternimator, Who is John Conners Father?', 'Kyle Reese', 'Anton Yelchin', 'Bryan Prince', 'Patrick Smith'),
  (73,'What actor plays Rex in Were Back! A Dinosaurs Story?', 'John Goodman', 'Joey Shea', 'Jay Leno', 'Martin Short'),
  (74,'In Back to the Future 2, what prediction about the future did they get correctly?', 'Flat screen TVs', 'People walk around with their pockets out', 'Holographic projections', 'Self tying shoes'),
  (75,'In Pacific Rim, what mark model is Gypsy Danger?', '3', '2', '6', '4'),
  (76,'In Transformers, how many years was the Ark on Earth before it was rediscovered by humans?', '4 million years', '3 million years', '5 million years', '6 million years'),
  (77,'In Tron, how does the original creator of the digital frontier refer to his computer creation?', 'The Grid', 'The Forest', 'The Path', 'The Room'),
  (78,'In Tron: Legacy what character does Jeff Bridges play?', 'Kevin Flynn', 'Sam Flynn', 'Zuse', 'Dumont'),
  (79,'What score did John Williams NOT compose?', 'Pirates of the Caribbean', 'Star Wars', 'Harry Potter', 'Jurassic Park'),
  (80,'In The Lord of the Rings, Frodo was given a blade that would glow when what creature is nearby?', 'Orcs', 'Elves', 'Ents', 'Dragons'),
  (81,'In The Lord of the Rings, what is the Elvish word for friend?', 'Mellon', 'Ada', 'Coron', 'Ered'),
  (82,'In The Lord of the Rings, what is the name of Gandalfs sword?', 'Foehammer', 'Orcbane', 'Stabby McStabstab', 'Harpe'),
  (83,'Who was the first person to turn into a monster in The Thing(probably)?', 'Norris', 'Blair', 'Cooper', 'Windows'),
  (84,'What year is Ready Player One based in?', '2045', '2110', '1999', '1985'),
  (85,'In Star Wars, what is Chewbaccas home planet?', 'Kashyyyk', 'Endor', 'Tatooine', 'Dagobah'),
  (86,'In Star Wars, who killed Jabba the Hutt?', 'Leia Organa', 'Luke Skywalker', 'Han Solo', 'Himself'),
  (87,'Who DID NOT direct a Star Wars movie?', 'Steven Spielberg', 'JJ Abrams', 'Rian Johnson', 'George Lucas'),
  (88,'In Spirited Away, what is the name of the spirit who is transformed into a mouse and helps Chihiro in the bathhouse?', 'Boh', 'No Face', 'Kamaji', 'Rah'),
  (89,'What is the name of the main character in Only Yesterday?', 'Taeko', 'Teko', 'Yuuki', 'Mako'),
  (90,'In Ponyo on the Cliff by the Sea, what is the name of the sea goddess who transforms into a human girl and becomes friends with Sosuke?', 'Ponyo', 'Taeko', 'Lisa', 'Fujimoto'),
  (91,'In Kikis Delivery Service, what is the name of Kikis black cat?', 'Jiji', 'Joji', 'Duke', 'The Baron'),
  (92,'In Howls Moving Castle, what is the name of the fire demon who provides power for the moving castle?', 'Calcifer', 'Lucifer', 'Turnip Head', 'The Witch of the Waste'),
  (93,'In the film Porco Rosso, what is the name of the seaplane pilot who befriends Porco?', 'Fio', 'Gio', 'Piccolo', 'Curtis'),
  (94,'In The Tale of Princess Kaguya, what is the name of the emperor who wants to make Princess Kaguya his bride?', 'Emperor', 'Sakura', 'Miyatsuko', 'Okina'),
  (95,'What is the name of the hotel in The Shining?', 'The Overlook', 'The Stanley', 'The Rosedale', 'Hotel Transylvania'),
  (96,'Who directed the movie Psycho?', 'Alfred Hitchcock', 'Stanley Kubrick', 'Roman Polanski', 'John Lennon'),
  (97,'What is the name of the haunted house in The Amityville Horror?', '112 Ocean Avenue', '7 Ocean Avenue', '42 Ocean Avenue', 'Oceans 8'),
  (98,'What is the name of the protagonist in Nightmare on Elm Street?', 'Nancy Thompson', 'Freddy Krueger', 'Tina Gray', 'Freddy Mercury'),
  (99,'Who directed the movie The Texas Chainsaw Massacre?', 'Tobe Hooper', 'Wes Craven', 'John Carpenter', 'John Wilkes Booth'),
  (100,'What is the name of the ghost in The Ring?', 'Samara', 'Sadako', 'Mariko', 'Kirby'),
  (101,'Who directed the movie Halloween?', 'John Carpenter', 'Tobe Hooper', 'Wes Craven', 'John Hopkins'),
  (102,'Who directed the movie Psycho?', 'Alfred Hitchcock', 'Roman Polanski', 'David Lynch', 'Martin Scorsese'),
  (103,'Who created the character Iron Man?', 'Stan Lee', 'Jack Kirby', 'Steve Ditko', 'Bruce Lee'),
  (104,'What is the real name of the character Deadpool?', 'Wade Wilson', 'Peter Parker', 'Scott Summers', 'Victor Creed'),
  (105,'What was the first Marvel film to be produced independently, outside of the Marvel Studios banner?', 'Blade (1998)', 'X-Men (2000)', 'Spider-Man (2002)', 'Cocaine Bear (2023)'),
  (106,'What is Captain Americas shield made of?', 'Vibranium', 'Steel', 'Jelly Beans', 'Uru'),
  (107,'In what year was the Avengers film released?', '2012', '2010', '2014', '2016'),
  (108,'Who played the villain Thanos in the Marvel Cinematic Universe?', 'Josh Brolin', 'Josh Elder', 'Tom Hiddleston', 'Idris Elba'),
  (109,'What is the name of the Infinity Stone that is associated with reality?', 'Reality Stone', 'Power Stone', 'Time Stone', 'Soul Stone'),
  (110,'In Tron: Legacy, where is the entrance to the digital world found?', 'In an arcade', 'At a library', 'In a zoo', 'In a bathroom');


INSERT INTO leaderboard VALUES
  (1, 4, 536),
  (2, 6, 530),
  (3, 3, 525),
  (4, 5, 520),
  (5, 2, 515),
  (6, 1, 420);


SELECT setval('accounts_id_seq', (SELECT MAX(id) + 1 FROM accounts));
SELECT setval('questions_id_seq', (SELECT MAX(id) + 1 FROM questions));
SELECT setval('leaderboard_id_seq', (SELECT MAX(id) + 1 FROM leaderboard));
