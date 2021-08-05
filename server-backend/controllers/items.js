// 'use strict';

// const {
//   getItems,
//   getItemByStatus,
//   getItemById
// } = require("../models/items");

// module.exports = {

//   getItems: (req, res) => {
//     getItems((err, results) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       return res.json({
//         success: 1,
//         data: results
//       });
//     });
//   },

//   getItemByStatus: (req, res) => {
//     const status = req.params.status;
//     getItemByStatus(status, (err, results) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       if (!results) {
//         return res.json({
//           success: 0,
//           message: "Record not Found"
//         });
//       }
//     });
//   },

 
//   getItemById: (req, res) => {
//     const id = req.params.id;
//     getItemById(id, (err, results) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       if (!results) {
//         return res.json({
//           success: 0,
//           message: "Record not Found"
//         });
//       }
//     });
//   },
 
  

// }

const Items = require('../models/items');

exports.findAll = (req, res, next) => {
  Items.findAll((err, item) => {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', item);
    res.send(item);
  });
}

exports.findById = (req, res, next) => {
  Items.findById(req.params.id, (err, item) => {
    if (err)
    res.send(err);
    res.json(item);
  });
}

// exports.findByStatus = (req, res, next) => {
//   Items.findByStatus(req.params.status, (err, item) => {
//     if (err)
//     res.send(err);
//     res.json(item);
//   });
// }