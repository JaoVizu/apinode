const mongoose = require('mongoose');

const GameSchema =  mongoose.Schema({
    name: String,
    description: String,
    genre: String,
    release_date: Date,
    created_at: Date,
});

module.exports = mongoose.model('Game', GameSchema)