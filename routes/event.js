const express = require('express');
const router = express.Router();
const db = require("../model/helper");

//GET all the events 
router.get("/", function(req, res, next) {
    db("SELECT * FROM event;")
         .then(results => {
             res.send(results.data);
         })
         .catch(err => res.status(500).send(err));
   });
   
//GET one event

//POST a new event 
router.post("/", async (req, res) => {
    let {date, day_of_week, time, _sportname, _venuename, _teamname_A, _teamname_B} = req.body;
    const sql = `INSERT INTO event(date, day_of_week, time, _sportname, _venuename, _teamname_A, _teamname_B) VALUES ("${date}", "${day_of_week}", "${time}", "${_sportname}", "${_venuename}", "${_teamname_A}", "${_teamname_B}")`;
    try{

        await db(sql);
        //return the updated list of event
        const result = await db("SELECT * FROM event");
        res.status(201).send(result.data)
    }
    catch(e){
        res.status(500).send({error: e.message})
    }
  });

module.exports = router;