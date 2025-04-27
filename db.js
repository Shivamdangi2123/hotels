const mongoose = require('mongoose');
require('dotenv').config();

// define mongo db connection url complsury h connection ke liye 


// const mongourl = process.env.DB_URL_LOCAL;
const mongourl =process.env.DB_URl;



// //set up mongo connection 


mongoose.connect(mongourl, {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
//get defult connection
//mongosh maintain default connection object represting the mongo db connection
const db = mongoose.connection;
//define event lisner for database conection
db.on('connected', function () {
   console.log("connected to mongo server");
})
db.on('disconnected', function () {
   console.log('server diconnected');
})
db.on('error', function (err) {
   console.log('error is present');
})
// export krna hota h server file k pass or import krna hota serverfile me

module.exports = db;