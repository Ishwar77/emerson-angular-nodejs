const express = require('express');
const userroute = express.Router();
const usercontroller = require('../controllers/user');

userroute.post("", usercontroller.addnewuser);
userroute.post("/login", usercontroller.userLogin);

module.exports = userroute;