## WizQuiz

#### Created by:

- Sean Mckee
- Alyn Liang
- Gio Garcia
- David Regalado
- Christian Hanna

Do you have what it takes to be a Quizard?

This website is to see how good your movie knowledge really is. Take a quiz to challenge what you know and see where you rank among others.

## Design:

- ![GHI](https://gitlab.com/grupo-cinco/wiz-quiz/-/blob/main/docs/ghi.md)
- ![SCHEMAS](https://gitlab.com/grupo-cinco/wiz-quiz/-/blob/main/docs/schemas.md)
- ![APIDESIGN](https://gitlab.com/grupo-cinco/wiz-quiz/-/blob/main/docs/apidesign.md)

### Functionality

- A user will be able to take a multiple choice quiz
  - each question is timed (10 seconds)
  - if the user is signed in, there score will be put on the leaderboard
  - for each question the user gets correct, a point will be added for them on the leaderboard
  - during the quiz a user can see how many questions they've answered correctly
- the leaderboard will have the users rank, username, and score
- Users can create an account with a username, email, and password
- Users not signed in can see the leaderboard, but will not be able to get their quiz scores on it
- Users with an account can sign back into that same account
- A user can sign out of their account
- A user can delete their account
- A user can update their account

### Project Initialization

1. Clone the project
2. Open the command terminal and run the following commands
   a. 'git clone <HTTPS Link>'
   b. 'cd wiz-quiz'
   c. 'docker volume create postgres-data'
   b. 'docker-compose build'
   d. 'docker-compose up'
3. Go your browser and go to http://localhost:3000
4. Website deployed at https://grupo-cinco.gitlab.io/wiz-quiz/

### Intended Market

The intended market is for any movie enjoyer and/or quiz enjoyer. It's for people looking to test their knowledge and see where they rank among others.
