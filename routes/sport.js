const express = require('express');
const router = express.Router();
const db = require("../model/helper");

//GET all the sports
router.get("/", function(req, res, next) {
   db("SELECT * FROM sport;")
        .then(results => {
            res.send(results.data);
        })
        .catch(err => res
                       .status(500)
                       .send(err));
  });
  
  //GET a sport by Id
  router.get("/:id", async (req, res) => {
    const sportId = req.params.id;

    try{
      let result = await db(`SELECT * FROM sport WHERE id = ${sportId}`);
      if(result.data) {
         res.send(result.data)
      }
      else{
        res 
          .status(404)
          .send({error: "Sport not found"})
      }
    }
    catch(e){
        res
          .status(500)
          .send({error: e.message})
    }
  });

  //POST a new sport 
  router.post("/", async (req, res) => {
    let {name} = req.body;
    const sql = `INSERT INTO sport(name) VALUES ("${name}")`;
    try{
     
        await db(sql);
        //return the updated list of sport
        const result = await db("SELECT * FROM sport");
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