const mongoose = require('mongoose');
const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true

    },
    teste: {
        type: String,
        enum: ['spicy', 'sweet','sour'],
        required: true
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: [String],

        default: []
    },
    num_sales: {
        type: Number,
        required: true
    }

})

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem; 