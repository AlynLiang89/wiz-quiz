
const data = [
    {
      question: "What's the name of the skyscraper in Die Hard?",
      incorrectAnswers: [
        "Naturo Highrise",
        "Empire State Building",
        "Sony Headquarters",
      ],
      correctAnswer: "Nakatomi Plaza",
    },
    {
        question: "For what movie did Steven Spielberg win his first Oscar for Best Director?",
        incorrectAnswers: [
          "Saving Private Ryan",
          "Lincoln",
          "Raiders of the Lost Ark",
        ],
        correctAnswer: "Schindler's List",
      },
      {
        question: "Who is the only actor to receive an Oscar nomination for acting in a Lord of the Rings movie?",
        incorrectAnswers: [
          "Sean Bean",
          "Andy Serkis",
          "Elijah Wood",
        ],
        correctAnswer: "Ian Mckellen",
      },
      {
        question: "Who wrote the theme music from Halloween?",
        incorrectAnswers: [
          "John Doe",
          "John Denver",
          "John Lennon",
        ],
        correctAnswer: "John Carpenter",
      },
      {
        question: "What is the name of Quint's shark-hunting boat in Jaws?",
        incorrectAnswers: [
          "Two Ladies from Spain",
          "The Doll's Eyes",
          "The White Whale",
        ],
        correctAnswer: "The Orca",
      },
      {
        question: "In the action thriller Speed, why is Annie (Sandra Bullock)'s driver's license suspended?",
        incorrectAnswers: [
          "Reckless Driving",
          "Rolling Stop",
          "Illegal Turn",
        ],
        correctAnswer: "Speeding",
      },
      {
        question: "The Battle of Thermopylae served as the basis of what highly stylized 2006 action flick?",
        incorrectAnswers: [
          "Meet the Spartans",
          "Movie 42",
          "Rocky",
        ],
        correctAnswer: "300",
      },
      {
        question: "Who wrote the screenplay for Rocky?",
        incorrectAnswers: [
          "Bullwinkle",
          "Arnold Schwarzenegger",
          "Jean-Claude Van Damme",
        ],
        correctAnswer: "Sylvester Stallone",
      },
      {
        question: "What is the real name of Uma Thurman's 'The Bride' character from Kill Bill?",
        incorrectAnswers: [
          "Luna Lovegood",
          "Katherine Banks",
          "Lady Death",
        ],
        correctAnswer: "Beatrix Kiddo",
      },
      {
        question: "How many suns does Luke's home planet of Tatooine have in Star Wars?",
        incorrectAnswers: [
          "1",
          "30",
          "3",
        ],
        correctAnswer: "2",
      },
      {
        question: "What Martin Scorsese movie holds the record for F-bombs?",
        incorrectAnswers: [
          "Taxi Driver",
          "Hugo",
          "The Irishman",
        ],
        correctAnswer: "The Wolf of Wall Street",
      },
      {
        question: "What is the highest grossing horror of all time?",
        incorrectAnswers: [
          "Us",
          "The Sixth Sense",
          "Ghostbusters"
        ],
        correctAnswer: "It",
      },
      {
        question: "In what movie did Bill Paxton's character cry out 'Game over man, game over'!",
        incorrectAnswers: [
          "Tombstone",
          "Nightcrawler",
          "Twister"
        ],
        correctAnswer: "Aliens",
      },
      {
        question: "In what movie did Bruce Campbell's character say 'Alright you primitive screwheads, listen up! See this? This… is my boomstick!'",
        incorrectAnswers: [
          "Spider Man 2",
          "Bubba Ho-Tep",
          "Darkman"
        ],
        correctAnswer: "Evil Dead: Army of Darkness",
      },
      {
        question: "Freddy Krueger wears a striped sweater of what two colors?",
        incorrectAnswers: [
          "Blue and Red",
          "Purple and Yellow",
          "Orange and Black"
        ],
        correctAnswer: "Red and Green",
      },
      {
        question: "If you were to watch the Marvel movies in chronological order, which one would you start with?",
        incorrectAnswers: [
          "Iron Man",
          "Black Panther",
          "Captain Marvel"
        ],
        correctAnswer: "Captain America",
      },
      {
        question: "The dog in The Sandlot's nickname is The Beast. What is its real name?",
        incorrectAnswers: [
          "Slobberboy",
          "Tiamat",
          "Homer"
        ],
        correctAnswer: "Hercules",
      },
      {
    question: "Which professional athlete was considered for the lead in The Terminator?",
    incorrectAnswers: [
      "Mike Tyson",
      "Tom Brady",
      "Wayne Gretzky",
    ],
    correctAnswer: "O.J Simpson",
  },
  {
    question: "What are the names of Hades' minions in Hercules?",
    incorrectAnswers: [
      "Greed and Sloth",
      "Muck and Mayhem",
      "Grease and Wheel",
    ],
    correctAnswer: "Pain and Panic",
  },
  {
    question: "What was the first Pixar movie?",
    incorrectAnswers: [
      "Finding Nemo",
      "A Bug's Life",
      "Monsters, INC.",
    ],
    correctAnswer: "Toy Story",
  },
  {
    question: "Emperor Kuzco turns into what animal in The Emperor's New Groove?",
    incorrectAnswers: [
      "Bat",
      "Horse",
      "Panther",
    ],
    correctAnswer: "Llama",
  },
  {
    question: "What is the most toxic and deadly thing in Monster's, Inc. ?",
    incorrectAnswers: [
      "Love",
      "A Sock",
      "Poison",
    ],
    correctAnswer: "A Child",
  },
  {
    question: "Which professional athlete was considered for the lead in The Terminator?",
    incorrectAnswers: [
      "Mike Tyson",
      "Tom Brady",
      "Wayne Gretzky",
    ],
    correctAnswer: "O.J Simpson",
  },
  {
    question: "What are the names of Hades' minions in Hercules?",
    incorrectAnswers: [
      "Greed and Sloth",
      "Muck and Mayhem",
      "Grease and Wheel",
    ],
    correctAnswer: "Pain and Panic",
  },
  {
    question: "What was the first Pixar movie?",
    incorrectAnswers: [
      "Finding Nemo",
      "A Bug's Life",
      "Monsters, INC.",
    ],
    correctAnswer: "Toy Story",
  },
  {
    question: "Emperor Kuzco turns into what animal in The Emperor's New Groove?",
    incorrectAnswers: [
      "Bat",
      "Horse",
      "Panther",
    ],
    correctAnswer: "Llama",
  },
  {
    question: "Who was the first cartoon character to get a star on the Hollywood Walk of Fame?",
    incorrectAnswers: [
      "Bugs Bunny",
      "Optimus Prime",
      "Jessica Rabbit",
    ],
    correctAnswer: "Mickey Mouse",
  },
  {
    question: "What is the most toxic and deadly thing in Monster's, Inc. ?",
    incorrectAnswers: [
      "Love",
      "A Sock",
      "Poison",
    ],
    correctAnswer: "A Child",
  },
  {
    question: "Michael Myer's mask in Halloween is of what actor's face?",
    incorrectAnswers: [
        "Bob Marley",
        "Steve Jobs",
        "Clint Eastwood",
    ],
    correctAnswer: "William Shatner",
  },
  {
    question: "How many people does John Wick kill in John Wick?",
    incorrectAnswers: [
        "35",
        "57",
        "42",
    ],
    correctAnswer: "77",
    },
    {
    question: "What role did Kurt Russel turn down to play as Jack Burton in Big Trouble in Little China?",
    incorrectAnswers: [
        "Soldier",
        "Hateful 8",
        "Deathproof",
    ],
    correctAnswer: "Highlander",
    },
    {
    question: "What is the name of Jack Burton's truck in Big Trouble in Little China?",
    incorrectAnswers: [
        "Lady in Red",
        "Smashburger",
        "Sub's Tubs",
    ],
    correctAnswer: "Porkchop Express",
    },
    {
    question: "What movie had Adam Sandler's character marrying that of Drew Barrymore?",
    incorrectAnswers: [
        "50 First Dates",
        "Click",
        "Little Nicky",
    ],
    correctAnswer: "The Wedding Singer",
    },
    {
    question: "What South Korean thriller won an Academy Award for Best Picture, Best Directing, and Best Writing?",
    incorrectAnswers: [
        "The Host",
        "Teeth",
        "Okja",
    ],
    correctAnswer: "Parasite",
    },
    {
    question: "What actor got his first major role in A Nightmare On Elm Street?",
    incorrectAnswers: [
        "Billy Bob Thorton",
        "Jason Momoa",
        "Guy Ritchie",
    ],
    correctAnswer: "Johnny Depp",
    },
    {
    question: "How many movies does the MCU have?",
    incorrectAnswers: [
        "20",
        "12",
        "45",
    ],
    correctAnswer: "28",
    },
    {
    question: "What day is Harry Potter's birthday?",
    incorrectAnswers: [
        "March 3, 1982",
        "October 3, 1986",
        "November 20, 1981",
    ],
    correctAnswer: "July 31, 1980",
    },
    {
    question: "What movie had costars Nicolas Cage, John Cusack, and John Malkovich?",
    incorrectAnswers: [
        "Gone in 60 Seconds",
        "The Rock",
        "Raising Arizona",
    ],
    correctAnswer: "Con Air",
    },
    {
    question: "Which Disney character appeared in Frozen as a stuffed animal?",
    incorrectAnswers: [
        "Goofy",
        "Ariel",
        "Mulan",
    ],
    correctAnswer: "Mickey Mouse",
    },
    {
    question: "What actress has won the most Academy Awards?",
    incorrectAnswers: [
        "Glenn Close",
        "Isabella Rossellini",
        "Betty White",
    ],
    correctAnswer: "Katherine Hepburn",
    },
    {
    question: "Where was the Lord of the Rings trilogy filmed?",
    incorrectAnswers: [
        "Germany",
        "Australia",
        "Ireland",
    ],
    correctAnswer: "New Zealand",
    },
    {
    question: "Who directed the film Psycho?",
    incorrectAnswers: [
        "Steven King",
        "John Carpenter",
        "Lewis Carol",
    ],
    correctAnswer: "Alfred Hitchcock",
    },
    {
    question: "What film is the line, 'Frankly Scarlet, I don't give a damn' from?",
    incorrectAnswers: [
        "Casablanca",
        "The Postman Always Rings Twice",
        "The Sound of Music",
    ],
    correctAnswer: "Gone with the Wind",
    },
    {
    question: "What is the name of Thor's Axe in the Marvel Universe?",
    incorrectAnswers: [
        "Face Smasher",
        "Ground Cleaver",
        "Titan's Bane",
    ],
    correctAnswer: "Storm Breaker",
    },
    {
    question: "What was the name of Max's love interest in A Goofy Movie?",
    incorrectAnswers: [
        "Rachel",
        "Rose",
        "River",
    ],
    correctAnswer: "Roxanne",
    },
    {
    question: "What illegal activity was Hiro participating in at the beginning of Big Hero 6?",
    incorrectAnswers: [
        "Gambling",
        "Racing",
        "Vandalizing Property",
    ],
    correctAnswer: "Robot Fighting",
    },
    {
    question: "In The movie Pacific Rim, how many Kaiju kills does Striker Eureka have?",
    incorrectAnswers: [
        "9",
        "10",
        "12",
    ],
    correctAnswer: "11",
    },
    {
    question: "What is Gohan's Dragon's name in Dragon Ball Z?",
    incorrectAnswers: [
        "Turtles",
        "Porunga",
        "Daelgus",
    ],
    correctAnswer: "Icarus",
    },
    {
    question: "What is Bulma's last name in Dragon Ball?",
    incorrectAnswers: [
        "Boxers",
        "Capsule",
        "Lace",
    ],
    correctAnswer: "Briefs",
    },
    {
    question: "What are the names of the Aliens on fake planet Namek in Dragon Ball Z?",
    incorrectAnswers: [
        "Cui and Pui Pui",
        "Dora and Neiz",
        "Rildo and Drildo",
    ],
    correctAnswer: "Zaccro and Raiti",
    },
    {
    question: "Which one of these is not a member of Garlic Jr's 'spice boys'?",
    incorrectAnswers: [
        "Salt",
        "Vinegar",
        "Mustard",
    ],
    correctAnswer: "Pepper",
    },
    {
    question: "How did Lelouch come up with the name Lamperouge in Code Geass?",
    incorrectAnswers: [
        "It was inspired by Suzaku",
        "He made it up",
        "The Ashford family gave it to him",
    ],
    correctAnswer: "It was his mother's maiden name",
    },
    {
    question: "Who rescued Princess Cornelia at Narita from Kallen and Zero in Code Geass?",
    incorrectAnswers: [
        "Andreas Dalton",
        "Jeremiah Gottwald",
        "Gilbert Guilford",
    ],
    correctAnswer: "Suzaku Kururugi",
    },
    {
    question: "While Lelouch was at the Chinese Federation in the episode Power of Passion, who impersonated Lelouch at Ashford Academy in Code Geass?",
    incorrectAnswers: [
        "Peco",
        "Suzaku",
        "Kallen",
    ],
    correctAnswer: "Sayoko",
    },
    {
    question: "Which Ashford Academy student council member was one of the terrorists Lelouch helped in Shinjuku in Code Geass?",
    incorrectAnswers: [
        "Mao",
        "Anya",
        "Gino",
    ],
    correctAnswer: "Kallen",
    },
    {
    question: "Which one of these Nightmares is considered to be Generation 6?",
    incorrectAnswers: [
        "Gekka",
        "MR-1",
        "Burai",
    ],
    correctAnswer: "Gawain",
    },
    {
    question: "From Austin Powers Finish this line…'Don't worry, things won't get…'",
    incorrectAnswers: [
        "Freaky",
        "Kinky",
        "Tantric",
    ],
    correctAnswer: "Weird",
    },
    {
    question: "In the Matrix, what color pill does Neo take?",
    incorrectAnswers: [
        "Blue",
        "Green",
        "Orange",
    ],
    correctAnswer: "Red",
    },
    {
    question: "In To Kill A Mockingbird what is the name of Scout's father?",
    incorrectAnswers: [
        "Jim",
        "Paul",
        "George",
    ],
    correctAnswer: "Atticus",
    },
    {
    question: "Finish the line… 'Austin, I am your…'",
    incorrectAnswers: [
        "Brother",
        "Uncle",
        "Mother",
    ],
    correctAnswer: "Father",
    },
    {
    question: "For what movie did Tom Hanks score his first Academy Award nomination?",
    incorrectAnswers: [
        "Forrest Gump",
        "You've got Mail",
        "Toy Story",
    ],
    correctAnswer: "Big",
    },
    {
    question: "In Ready Player One what is the name of the program the whole planet logs into daily?",
    incorrectAnswers: [
        "Simulation Nation",
        "Facebook",
        "Parcival's Paradise",
    ],
    correctAnswer: "The Oasis",
    },
    {
    question: "What American writer/director starred in several iconic European-produced Spaghetti Westerns?",
    incorrectAnswers: [
        "John Wayne",
        "George Clooney",
        "Jeff Bridges",
    ],
    correctAnswer: "Clint Eastwood",
    },
    {
    question: "Who is the highest grossing director of all time?",
    incorrectAnswers: [
        "Quentin Tarantino",
        "Christopher Nolan",
        "James Cameron",
    ],
    correctAnswer: "Steven Spielberg",
    },
    {
    question: "In Terminator 2, what is the license plate of the motorcycle the terminator used to rescue John Conner?",
    incorrectAnswers: [
        "9J4KJ2",
        "9YT635",
        "9MY763",
    ],
    correctAnswer: "9A7218",
    },
    {
    question: "Who is John Conner's Father?",
    incorrectAnswers: [
        "Anton Yelchin",
        "Bryan Prince",
        "Patrick Smith",
    ],
    correctAnswer: "Kyle Reese",
    },
    {
    question: "What actor plays Rex in We're Back! A Dinosaur's Story?",
    incorrectAnswers: [
        "Joey Shea",
        "Jay Leno",
        "Martin Short",
    ],
    correctAnswer: "John Goodman",
    },
    {
    question: "In Back to the Future 2, what prediction about the future did they get correctly?",
    incorrectAnswers: [
        "People walk around with their pockets out",
        "Holographic projections",
        "Self tying shoes",
    ],
    correctAnswer: "Flat screen TVs",
    },
    {
    question: "In Pacific Rim, what mark model is Gypsy Danger?",
    incorrectAnswers: [
        "2",
        "5",
        "4",
    ],
    correctAnswer: "3",
    },
    {
    question: "In Transformers, how many years was the Ark on Earth before it was rediscovered by humans?",
    incorrectAnswers: [
        "3 million years",
        "5 million years",
        "6 million years",
    ],
    correctAnswer: "4 million years",
    },
    {
    question: "In Tron, how does the original creator of the digital frontier refer to his computer creation?",
    incorrectAnswers: [
        "The Forest",
        "The Path",
        "The Room",
    ],
    correctAnswer: "The Grid",
    },
    {
    question: "In Tron: Legacy what character does Jeff Bridges play? ",
    incorrectAnswers: [
        "Sam Flynn",
        "Zuse",
        "Dumont",
    ],
    correctAnswer: "Kevin Flynn",
    },
    {
    question: "What score did John Williams NOT compose?",
    incorrectAnswers: [
        "Star Wars",
        "Harry Potter",
        "Jurassic Park",
    ],
    correctAnswer: "Pirates of the Caribbean",
    },
    {
    question: " In Lord of the rings, Frodo was given a blade that would glow when what creature is nearby?",
    incorrectAnswers: [
        "Elves",
        "Ents",
        "Dragons",
    ],
    correctAnswer: "Orcs",
    },
    {
    question: "In Lord of the rings, what is the Elvish word for friend?",
    incorrectAnswers: [
        "Ada",
        "Coron",
        "Ered",
    ],
    correctAnswer: "Mellon",
    },
    {
    question: "In Lord of the Rings, what is the name of Gandalf's sword? ",
    incorrectAnswers: [
        "Orcbane",
        "Stabby McStabstab",
        "Harpe",
    ],
    correctAnswer: "Foehammer",
    },
    {
    question: "Who was the first person to turn into a monster in The Thing(probably)?",
    incorrectAnswers: [
        "Blair",
        "Cooper",
        "Windows",
    ],
    correctAnswer: "Norris",
    },
    {
    question: "What year is Ready Player One based in?",
    incorrectAnswers: [
        "1985",
        "1998",
        "2012",
    ],
    correctAnswer: "2045",
    },
    {
    question: " In Star Wars, what is the Chewbacca home planet?",
    incorrectAnswers: [
        "Endor",
        "Tatooine",
        "Dagobah",
    ],
    correctAnswer: "Kashyyyk",
    },
    {
    question: "In Star Wars, who killed Jabba the Hutt?",
    incorrectAnswers: [
        "Luke Skywalker",
        "Han Solo",
        "Himself",
    ],
    correctAnswer: "Leia Organa",
    },    {
    question: "Who DID NOT direct a star wars movie?",
    incorrectAnswers: [
        "JJ Abrams",
        "Rian Johnson",
        "George Lucas",
    ],
    correctAnswer: "Steven Spielberg",
    },
    {
    question: "In Spirited Away, what is the name of the spirit who is transformed into a mouse and helps Chihiro in the bathhouse?",
    incorrectAnswers: [
        "No-Face",
        "Kamaji",
        "Bah",
    ],
    correctAnswer: "Boh",
    },
    {
    question: "What is the name of the main character in Only Yesterday?",
    incorrectAnswers: [
        "Teko",
        "Yuuko",
        "Miki",
    ],
    correctAnswer: "Taeko",
    },
    {
    question: "In Ponyo on the Cliff by the Sea, what is the name of the sea goddess who transforms into a human girl and becomes friends with Sosuke?",
    incorrectAnswers: [
        "Taeko",
        "Lisa",
        "Fujimoto",
    ],
    correctAnswer: "Ponyo",
    },
    {
    question: "In Kiki's Delivery Service, what is the name of Kiki's black cat?",
    incorrectAnswers: [
        "Joji",
        "Duke",
        "The Baron",
    ],
    correctAnswer: "Jiji",
    },
    {
    question: "In Howl's Moving Castle, what is the name of the fire demon who provides power for Howl's moving castle?",
    incorrectAnswers: [
        "Lucifer",
        "Turnip Head",
        "The Witch of the Waste",
    ],
    correctAnswer: "Calcifer",
    },
    {
    question: "In the film Porco Rosso, what is the name of the seaplane pilot who befriends Porco?",
    incorrectAnswers: [
        "Gio",
        "Piccolo",
        "Curtis",
    ],
    correctAnswer: "Fio",
    },
    {
    question: "In The Tale of Princess Kaguya, what is the name of the emperor who wants to make Princess Kaguya his bride?",
    incorrectAnswers: [
        "Sakura",
        "Miyatsuko",
        "Okina",
    ],
    correctAnswer: "Emperor",
    },
    {
    question: "What is the name of the hotel in The Shining?",
    incorrectAnswers: [
        "The Stanley",
        "The Rosedale",
        "Hotel Transylvania",
    ],
    correctAnswer: "The Overlook",
    },
    {
    question: "Who directed the movie Psycho?",
    incorrectAnswers: [
        "Stanley Kubrick",
        "Roman Polanski",
        "John Lenon",
    ],
    correctAnswer: "Alfred Hitchcock",
    },
    {
    question: "What is the name of the haunted house in The Amityville Horror?",
    incorrectAnswers: [
        "7 Ocean Avenue",
        "42 Ocean Avenue",
        "Oceans 8",
    ],
    correctAnswer: "112 Ocean Avenue",
    },
    {
    question: "What is the name of the protagonist in Nightmare on Elm Street?",
    incorrectAnswers: [
        "Freddy Krueger",
        "Tina Gray",
        "Freddy Mercury",
    ],
    correctAnswer: "Nancy Thompson",
    },
    {
    question: "Who directed the movie The Texas Chainsaw Massacre?",
    incorrectAnswers: [
        "Wes Craven",
        "John Carpenter",
        "John Wayne's Booth",
    ],
    correctAnswer: "Tobe Hooper",
    },
    {
    question: "What is the name of the ghost in The Ring?",
    incorrectAnswers: [
        "Sadako",
        "Mariko",
        "Kirby",
    ],
    correctAnswer: "Samara",
    },
    {
    question: "Who directed the movie Halloween?",
    incorrectAnswers: [
        "Tobe Hooper",
        "Wes Craven",
        "John Hopkins",
    ],
    correctAnswer: "John Carpenter",
    },
    {
    question: "What is the name of the protagonist in Scream?",
    incorrectAnswers: [
        "Billy Loomis",
        "Stu Macher",
        "Ashley Tisdale",
    ],
    correctAnswer: "Sidney Prescott",
    },
    {
    question: "Who directed the movie Psycho?",
    incorrectAnswers: [
        "Roman Polanski",
        "David Lynch",
        "Martin Scorsese",
    ],
    correctAnswer: "Alfred Hitchcock",
    },
    {
    question: " What is the name of the protagonist in The Exorcist?",
    incorrectAnswers: [
        "Regan MacNeil",
        "Chris MacNeil",
        "Sharon Spencer",
    ],
    correctAnswer: "Regan MacNeil ",
    },
    {
    question: "Who created the character of Iron Man?",
    incorrectAnswers: [
        "Jack Kirby",
        "Steve Ditko",
        "Bruce Lee",
    ],
    correctAnswer: "Stan Lee",
    },
    {
    question: "What is the real name of the character Deadpool?",
    incorrectAnswers: [
        "Peter Parker",
        "Scott Summers",
        "Victor Creed",
    ],
    correctAnswer: "Wade Wilson",
    },
    {
    question: "Who played Thor in the Marvel Cinematic Universe?",
    incorrectAnswers: [
        "Chris Evans",
        "Robert Downey Jr.",
        "Mark Ruffalo",
    ],
    correctAnswer: "Chris Hemsworth",
    },
    {
    question: "What was the first Marvel film to be produced independently, outside of the Marvel Studios banner?",
    incorrectAnswers: [
        "X-Men (2000)",
        "Spider-Man (2002)",
        "Cocaine Bear (2023)",
    ],
    correctAnswer: "Blade (1998) ",
    },
    {
    question: "What is Captain America's shield made of?",
    incorrectAnswers: [
        "Steel",
        "Jelly Beans",
        "Uru",
    ],
    correctAnswer: "Vibranium",
    },
    {
    question: "What is the real name of the character The Hulk?",
    incorrectAnswers: [
        "Bill Gates",
        "Dr. Phil",
        "Bill Clinton",
    ],
    correctAnswer: "Bruce Banner",
    },
    {
    question: "In what year was the Avengers film released?",
    incorrectAnswers: [
        "2010",
        "2014",
        "2016",
    ],
    correctAnswer: "2012",
    },
    {
    question: "Who played the villain Thanos in the Marvel Cinematic Universe?",
    incorrectAnswers: [
        "Josh Elder",
        "Tom Hiddleston",
        "Idris Elba",
    ],
    correctAnswer: "Josh Brolin",
    },
    {
    question: "What is the name of the Infinity Stone that is associated with reality?",
    incorrectAnswers: [
        "Power Stone",
        "Time Stone",
        "Soul Stone",
    ],
    correctAnswer: "Reality Stone",
    },
    {
    question: "In Tron: Legacy, where is the entrance to the digital world found?",
    incorrectAnswers: [
        "At a library",
        "In a zoo",
        "In a bathroom",
    ],
    correctAnswer: "In an arcade",
    },
  ];

  export default data;
