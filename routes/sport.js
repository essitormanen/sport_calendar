var express = require('express');
var router = express.Router();
const db = require("../model/helper");

//GET all the sports
router.get('/', function(req, res, next) {
   db("SELECT * FROM sport;")
        .then(results => {
            res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
  });
  
  module.exports = router;