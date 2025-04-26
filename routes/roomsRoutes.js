const express = require('express');
const router = express.Router();
const Rooms = require('../models/Rooms');


router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newRooms = new Rooms(data);
        const response = await newRooms.save();
        console.log("data are saved")
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "internal server problem"
        })
    }
});
router.get('/', async (req, res) => {
    try {
        const data = await Rooms.find();
        console.log('room are booked');
        res.status(200).json(data);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' })
    }
})

module.exports = router;