const musers = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.addnewuser = (req, res, next) => {
  bcrypt.hash(req.body.inputPassword, 10)
    .then((enc_password) => {
      var new_user;
      if (typeof req.body.inputRole !== 'undefined' && req.body.inputRole !== null) {
        new_user = new musers({
          'inputFname': req.body.inputFname,
          'inputLname': req.body.inputLname,
          'inputContact': req.body.inputContact,
          'inputUsername': req.body.inputUsername,
          'inputPassword': enc_password,
          'inputRole': req.body.inputRole
        });
      } else {
        new_user = new musers({
          'inputFname': req.body.inputFname,
          'inputLname': req.body.inputLname,
          'inputContact': req.body.inputContact,
          'inputUsername': req.body.inputUsername,
          'inputPassword': enc_password

        });
      }

      new_user.save()
        .then((result) => {
          res.status(201).json({
            message: 'User Added Successfully',
            _id: result._id
          })
        })
    })
}


exports.userLogin = (req, res, next) => {
  let fetched_user;
  console.log(req.body);
  var query = { 'inputUsername': req.body.username };
  musers.findOne(query)
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: 'Autentication Failed'
        });
      }
      fetched_user = user;
      return bcrypt.compare(req.body.password, fetched_user.inputPassword);
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({
          message: 'Autentication Failed'
        });
      }
      const token = jwt.sign({
        username: fetched_user.username,
        userid: fetched_user._id,
        user_role: fetched_user.inputRole
      },
        'restaurantapp',
        { expiresIn: '1h' }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userid: fetched_user._id,
        user_role: fetched_user.inputRole
      });
    })
    .catch(error => {
      res.status(401).json({
        message: 'Invalid Autentication Credentials'
      });
    })
}