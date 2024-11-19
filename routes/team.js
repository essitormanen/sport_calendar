const express = require('express');
const router = express.Router();
const db = require("../model/helper");

//GET all the teams
router.get("/", function(req, res, next) {
    db("SELECT * FROM team;")
        .then(results => {
            res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
});

//POST a new team
router.post("/", async (req, res) => {
    let {name, _sportname} = req.body;
    const sql = `INSERT INTO team(name, _sportname) VALUES ("${name}", "${_sportname}")`;
    try{
     
        await db(sql);
        //return the updated list of team
        const result = await db("SELECT * FROM team");
        res.status(201).send(result.data)
    }
    catch(e){
        res.status(500).send({error: e.message})
    }
  });



module.exports = router;