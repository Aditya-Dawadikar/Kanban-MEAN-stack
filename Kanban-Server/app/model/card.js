const mongoose = require('mongoose');

const Card = mongoose.Schema({
    columnName: String,
    task: String,
    status: String
});

module.exports = mongoose.model('cards', Card);