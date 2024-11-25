Welcome to my project "Sport Calendar"!

BACK-END
Port 5000

in routes, event/_sportname doesn't work 

you can fetch events by id 

you can post a new event with a body:
{
  "date": "", //format: yyyy-mm-dd
  "time": "11:00:00", //format hh:mm:ss
  "_sportname": "Football", //VARCHAR
  "_venuename": "Stadium", //VARCHAR
  "_teamname_A": "Huuhkajat", //VARCHAR
  "_teamname_B": "Kurenpojat" //VARCHAR 
}

Because of the nature of the foreign keys, name of the sport, venue & both teams need to be posted to the database in order for them to be accepted as values when adding a new event. this is making it a bit complicated at this point in the UI 

FRONT END 
Port: 5173

AddEvent

sport options aren't dynamically in sync with the sports listed in database, they are hardcoded in the form

First add sport (backend), then teams (backend) then you can add events (backend or frontend)
