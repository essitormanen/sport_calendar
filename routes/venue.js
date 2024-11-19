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


//GET one venue 


//POST a new venue 
router.post("/", async (req, res) => {
    let {name} = req.body;
    const sql = `INSERT INTO venue(name, location) VALUES ("${name}", "${location}")`;
    try{
     
        await db(sql);
        //return the updated list of sport
        const result = await db("SELECT * FROM venue");
        res.status(201).send(result.data)
    }
    catch(e){
        res.status(500).send({error: e.message})
    }
  });

module.exports = router;