// import express from 'express';
const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT ||3000 ;
const Person = require('./models/Person');
const MenuItem = require('./models/MenuItem');
const Rooms = require('./models/Rooms');


const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);
const menuRoutes = require('./routes/menuRoutes')
app.use('/menu', menuRoutes);
const roomsRoutes = require('./routes/roomsRoutes');
app.use('/Rooms', roomsRoutes);



app.get("/", function (req, res) {
  res.send("i an here2323");
})



// port is define 

app.listen(3000, () => {
  console.log("server are running")  ;
}); 