const express = require('express');
const itemcontroller = require('../controllers/item');
const itemroute = express.Router();

itemroute.get("", itemcontroller.getItemlist);
itemroute.get("/:status", itemcontroller.getItemByStatus);
itemroute.get("/item/:id", itemcontroller.getsingleItem);
itemroute.get("/search/:item", itemcontroller.getsearchedItem);
itemroute.post("", itemcontroller.addNewItem);
// itemroute.get("/status", itemcontroller.getItemByStatus);

module.exports = itemroute;