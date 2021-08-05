// const router = require("express").Router();

// const {
//   getItems,
//   getItemByStatus,
//   getItemById
// } = require("../controllers/items");

// router.get("", getItems);
// router.get("/:status", getItems);
// router.get("/:id", getItems);

// module.exports = router;

const express = require('express')
const router = express.Router()
const itemController =   require('../controllers/items');

router.get('/', itemController.findAll);

//router.get('/:statis', itemController.findByStatus);

router.get('/:id', itemController.findById);


module.exports = router