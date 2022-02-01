const mongoose = require('mongoose');

module.exports = mongoose.model('Flight', mongoose.Schema({
    departure: String,
    destination: String,
    departureDateTime: Date,
    arrivalDateTime: Date,
    price: Number,
    passenger: String,
}));