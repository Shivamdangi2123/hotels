// import express from 'express';
const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
const Person = require('./models/Person');
const MenuItem = require('./models/MenuItem');
const Rooms = require('./models/Rooms');


const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);
const menuRoutes = require('./routes/menuRoutes')
app.use('/menu', menuRoutes);
const roomsRoutes = require('./routes/roomsRoutes');
app.use('/Rooms', roomsRoutes);



passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    const user = await Person.findOne({ username: username });
    if (!user)
      return done(null, false, { massage: 'incorrect username' });

    if (user.password == password ? true : false) {
      return done(null, user)
    } else {
      return done(null, false, { massage: 'incorrect password' })
    }

  } catch (err) {
    return done(err);
  }
}))

app.use(passport.initialize());

// const logreq = (res, req, next) => {
//   console.log(`${new Date().toLocaleString()} request made to :${req.originalUrl}`);
//   next();

// }
const localAuthmiddleware =passport.authenticate('local', { session: false });
app.use(logreq)
app.get("/", localAuthmiddleware , function (req, res) {
  res.send("i an here2323");
})



// port is define 

app.listen(3000, () => {
  console.log("server are running");
}); 