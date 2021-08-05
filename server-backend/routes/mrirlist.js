const express = require('express');
const mrircontroller = require('../controllers/mrir');
const mrirroute = express.Router();

mrirroute.get("", mrircontroller.getItemlist);
mrirroute.get("/:id", mrircontroller.getsingleItem);

module.exports = mrirroute;