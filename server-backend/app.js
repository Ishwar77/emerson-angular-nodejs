const express = require('express');
const mongoose = require('mongoose');
const app = express();
const body_parser = require('body-parser');

const usersroutes = require('./routes/users');
const itemroutes = require('./routes/item');
const mrirroutes = require('./routes/mrirlist');
const descripancyroutes = require('./routes/descripancy');

mongoose.connect("mongodb+srv://eduappuser:ishu@046@edugoapp.3fhu8.mongodb.net/authdemo?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('CONNECTED TO DATABASES');
  })
  .catch(() => {
    console.log('ERROR CANNOT CONNECTED TO DATABASE');
  });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTION');
  next();
});

app.use(body_parser.json());

app.use(body_parser.urlencoded({ extended: false }));

app.use("/api/users", usersroutes);
app.use("/api/items", itemroutes);
app.use("/api/mrir", mrirroutes);
app.use("/api/alogin", itemroutes);
app.use("/api/descripancy", descripancyroutes);

let port = 3000;
app.listen(port, () => {
  console.log('Server is up and running on port numner ' + port);
});

module.exports = app;

// const express = require('express');
// const bodyParser = require('body-parser');

// const itemroutes = require('./routes/items');

// const app = express();

// const port = process.env.PORT || 8081;

// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.json());

// app.use((req,res,next)=>{
//   res.setHeader('Access-Control-Allow-Origin','*');
//   res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
//   res.setHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTION');
//   next();
// });

// app.use('/api/items', itemroutes);


// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });
