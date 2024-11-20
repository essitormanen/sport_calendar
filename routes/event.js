const express = require('express');
const router = express.Router();
const db = require("../model/helper");

//GET all the events 
router.get("/", function(req, res, next) {
    db("SELECT * FROM event;")
         .then(results => {
             res
                .send(results.data);
         })
         .catch(err => res
                        .status(500)
                        .send(err));
   });
   
//GET an event by _sportname //DOES NOT WORK ATM
router.get("/:_sportname", async function(req, res) {
    const sportname = req.params._sportname;
    try{
        const result = await db(`SELECT * FROM event WHERE _sportname = ${sportname}`);
        if(result.data){
            res.send(result.data)
            console.log(result.data)
            console.log(sportname)
        }
        else{
            res
             .status(404)
             .send({error: "Event With This Sport Not Found!"})
        }
    }
    catch(e){
        res
         .status(500)
         .send({error: e.message})
    }
});


// GET an event with id 
router.get("/:id", async (req, res) => {
    const eventId = req.params.id;

    try{
      const result = await db(`SELECT * FROM event where id = ${eventId}`);
      const events = result.data;
      if(result.data.length >0) {
         res.send(result.data);
      }
      else{
        res 
          .status(404)
          .send({error: "Event not found"})
      }
    }
    catch(e){
        res
          .status(500)
          .send({error: e.message})
    }
  });
  

//POST a new event 
router.post("/", async (req, res) => {
    let {date, time, _sportname, _venuename, _teamname_A, _teamname_B} = req.body;
    const sql = `INSERT INTO event(date, time, _sportname, _venuename, _teamname_A, _teamname_B) VALUES ("${date}", "${time}", "${_sportname}", "${_venuename}", "${_teamname_A}", "${_teamname_B}")`;
    try{
        await db(sql);
        //return the updated list of event
        const result = await db("SELECT * FROM event");
        res
         .status(201)
         .send(result.data)
    }
    catch(e){
        res
         .status(500)
         .send({error: e.message})
    }
  });

module.exports = router;

