3/3
Unit test
I figured out the unit test for the get all leaderboards.
3/10
Deploying Blockers
Url bugs when clicking buttons
3/9
Fixing leaderboard post refractor
After refractoring a lot of code with people in the breakout room the leaderboard on swagger and the front is showing “random” numbers in the username spot and the score spot. I figured out during the refractor that the query for the get all in leaderboard queries. Was changed from selecting the username, profile picture, and score to just selecting all data from the account given the account id. This was a problem because there are not enough spots in the leaderboard for all the spots.
3/8
Connecting create a leaderboard to create an account
We were having a blocker when a user finishes a quiz we couldn’t get that user to get into the leaderboard. Basically, when a user finished a quiz, we couldn’t run “create leaderboard”.To fix this the thinking was that when an account is created the query for signing in to that account is run. To fix the issue at hand I added that when an account is created the account is signed in and added to the leaderboard.
3/7
Changing “score” data column from leaderboard table to account table
We were having a blocker that when a user finishes a quiz we couldn’t update their score in the leaderboard. The solution was to change the “score” data column from being located in the leaderboard table to being located in the accounts table
3/6
Adding a profile picture spot to the create account.
When creating an account there wasn’t a spot for a profile picture in the backend so I added that in backend
3/5
Added ReadME
Helping with unit tests
3/3
Unit test
I figured out the unit test for the get all leaderboards.
Helping with unit tests
Feb 30
All swagger basically completely working
Feb 29
Connecting to beekeeper
Feb 20
Creating leaderboard routers
Feb 19
Creating leaderboard queries
Feb 18
Creating leaderboard migrations
Feb 17
Creating leaderboard in sql file
Feb 16
Geting first swagger endpoints to work and successfully creating an account
Feb 15
Main.y
Set up docker
Feb 14
Created a database for questions
Created a project in gitlab