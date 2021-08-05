const express = require('express');
const descripancycontroller = require('../controllers/descripancy');
const descripancyroute = express.Router();

descripancyroute.get("", descripancycontroller.getItemlist);
descripancyroute.get("/:id", descripancycontroller.getsingleItem);

module.exports = descripancyroute;