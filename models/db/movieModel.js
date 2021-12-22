const mongoose = require('mongoose');

module.exports = mongoose.model('Movie', mongoose.Schema({
    title: String,
}));