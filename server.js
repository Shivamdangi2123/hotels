// import express from 'express';
const express = require('express');
const app = express();
const db = require('./db');
const passport = reequire('./auth');
require('dotenv').config();


app.use(passport.initialize());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
const Person = require('./models/Person');
const MenuItem = require('./models/MenuItem');
const Rooms = require('./models/Rooms');

const localAuthmiddleware =passport.authenticate('local', { session: false });
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);
const menuRoutes = require('./routes/menuRoutes')
app.use('/menu', menuRoutes);
const roomsRoutes = require('./routes/roomsRoutes');
app.use('/Rooms', localAuthmiddleware ,roomsRoutes);





// const logreq = (res, req, next) => {
//   console.log(`${new Date().toLocaleString()} request made to :${req.originalUrl}`);
//   next();

// }

// app.use(logreq)
app.get("/", localAuthmiddleware , function (req, res) {
  res.send("i an here2323");
})



// port is define 

app.listen(3000, () => {
  console.log("server are running");
}); 