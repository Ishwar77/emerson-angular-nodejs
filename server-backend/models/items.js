var dbConn = require('../config/database');

// module.exports = {


//   getItems: callBack => {
//     dbConn.query(
//       `Select * from mitems`, (err, res, next) => {
//         if (err) {
//           console.log("error: ", err);
//           callBack(null, err);
//         }
//         else {
//           console.log('items : ', res);
//           callBack(null, res);
//         }
//       });
//   },

//   getItemByStatus: (status, callBack) => {
//     dbConn.query(
//       `select * from mitems where status = ?`,
//       [status],
//       (error, results, fields) => {
//         if (error) {
//           callBack(error);
//         }
//         return callBack(null, results[0]);
//       }
//     );
//   },

//   getItemById: (id, callBack) => {
//     dbConn.query(
//       `select * from mitems where id = ?`,
//       [id],
//       (error, results, fields) => {
//         if (error) {
//           callBack(error);
//         }
//         return callBack(null, results[0]);
//       }
//     );
//   },

// }

var Items = function (item) {
  this.item = item.item;
  this.detail = item.detail;
  this.quantity = item.quantity;
  this.location = item.location;
  this.status = item.status;
}


Items.findAll = (result) => {
  dbConn.query("Select * from mitems", (err, res, next) => {
  if(err) {
    console.log("error: ", err);
    result(null, err);
  }
  else{
    console.log('employees : ', res);
    result(null, res);
  }
  });
  }

// Items.findByStatus = (status, result) => {
//   dbConn.query("Select * from mitems where status = ? ", status, (err, res, next) => {
//   if(err) {
//     console.log("error: ", err);
//     result(err, null);
//   }
//   else{
//     result(null, res);
//   }
//   });
// };
  
Items.findById = (id, result) => {
  dbConn.query("Select * from mitems where id = ? ", id, (err, res, next) => {
  if(err) {
    console.log("error: ", err);
    result(err, null);
  }
  else{
    result(null, res);
  }
  });
};
  
module.exports= Items;