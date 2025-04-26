const mongoose = require('mongoose');
const roomsSchema = new mongoose.Schema({
    RoomNo: {
        type: String,
        required: true,
        unique: true
    },
    Price: {
        type: Number,
        required: true,
        default: 3000
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
});
const Rooms = mongoose.model('Rooms', roomsSchema);
module.exports = Rooms;
