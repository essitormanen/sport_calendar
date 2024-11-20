const express = require('express');
const router = express.Router();
const db = require("../model/helper");

//GET all venues
router.get("/", function(req, res, next) {
    db("SELECT * FROM venue;")
         .then(results => {
             res.send(results.data);
         })
         .catch(err => res.status(500).send(err));
   });


//GET one venue by id
router.get("/:id", async (req, res) => {
    const venueId = req.params.id;

    try{
      let result = await db(`SELECT * FROM venue WHERE id = ${venueId}`);
      if(result.data) {
         res.send(result.data)
      }
      else{
        res 
          .status(404)
          .send({error: "Venue not found"})
      }
    }
    catch(e){
        res
          .status(500)
          .send({error: e.message})
    }
  });
  

//POST a new venue 
router.post("/", async (req, res) => {
    let {name, location} = req.body;
    const sql = `INSERT INTO venue(name, location) VALUES ("${name}", "${location}")`;
    try{
     
        await db(sql);
        //return the updated list of venue
        const result = await db("SELECT * FROM venue");
        res.status(201).send(result.data)
    }
    catch(e){
        res.status(500).send({error: e.message})
    }
  });

module.exports = router;