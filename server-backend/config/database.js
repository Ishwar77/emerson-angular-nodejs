'use strict';
const mysql = require('mysql');

// const dbConn = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database: 'nodemysqldb',
//   port : '3306'
// });
// dbConn.connect(function(err) {
//   if (err) throw err;
//   console.log("Database Connected!");
// });


const dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'emerson',
  port : '3306'
});

dbConn.connect( (error) => {
  if(error) {
    console.log(error)
  } else {
    console.log("MySQL Connected...")
  }
})


module.exports = dbConn;