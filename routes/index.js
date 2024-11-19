const express = require('express');
const router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("Welcome to the Sports Calendar!");
});

module.exports = router;
