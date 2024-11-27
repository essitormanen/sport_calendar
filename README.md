# MVP

Welcome to my project "Sport Calendar"!

In this repository, I have built a full-stack Sports Calendar app using React, Node/Express, and MySQL.

In the back-end you can add sports, venues, teams and events to the database
In the front-end you can add new events and display all existing events. 

## Dependencies

Run `npm install` in project directory to install dependencies related to Express.

`cd client` and run `npm install` to install the dependencies related to React (the client).

### Database Prep

Create `.env` file in project directory (my-express-app) and add

DB_HOST=localhost
DB_USER=root
DB_PASS=root
DB_NAME=sports_calendar


In the MySQL CLI, type `create database sports_calendar;` to create a database in MySQL.  {/* you can name the database as you wish */}

Run `npm run migrate` in your terminal, in the project folder

### Run Your Development Servers

1. Run `npm start` in project directory to start the Express server on port 5000
2. Run `cd client` and run `npm run dev` to start client server in development mode, port will be 5173
3. Test client app in `http://localhost:5173`

   ## Project Description

- This project is a 'Sport Event Calendar', where you can add events to a database and display it in the client. 

- The information used for the Sport Calendar is sourced from the database created in the init_db.sql file. 

- In the database, there are four tables titled `sport`, `team`, `venue` and `event`. The `sport` table contains the names and ids of different kinds of sports, the `team` contains names of teams and which sport they play. At the moment the sport of the team doesn't apply in any other part of the project. The idea would be to connect the team to a sport for filtering purposes. The `venue` contains a name of a venue, and additionally would contain a location for filtering purposes, but it isn't implemented at the moment. The `event` table contains information of different events that are then rendered to the client side on the visual sport calendar. 

The init_db.sql file has some initial values that are added to the database when running `npm run migrate`. 

To add data to the database, you can refer to correct body frames under: 

`sport`: 
{ 
  "name": ""
}

`team`: 
{ 
  "name": "",
  "_sportname": ""
}

`venue`: 
{
  "name": "",
  "location": ""
}

`event`: 
{
  "date": "", //preferred format: yyyy-mm-dd
  "time": "11:00:00", //format hh:mm:ss
  "_sportname": "", //VARCHAR
  "_venuename": "", //VARCHAR
  "_teamname_A": "", //VARCHAR
  "_teamname_B": "" //VARCHAR 
}

Note!
  - you can fetch events by id 
  - in routes, event/_sportname doesn't work   

- In the client, the App.jsx file fetches the events from the database 

Because of the nature of the foreign keys, the tables `sport`, `venue` & both teams need to be posted to the database beforehand in order for them to be accepted as values when adding a new event. 

Note! In the client side there are not any indications of which sports/teams/venues exist in the database. You can check the default values in the init_db.sql file.

- There is also a component called AddEvent.jsx, which contains a form to create/add new events to the database. It takes the values (date, time, sport, venue, team A & team B) // Note, you can add for example a Football event with Basketballl teams/venues, as they aren't properly separated in the code. Submitting a form with suitable information, the event will be added to the database and will show on the calendar after refreshing the page. Submitting an empty form or a form with falsey values, you can find an error in the console. 

