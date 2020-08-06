const mongoose = require('mongoose');

const Column = mongoose.Schema({
    columnName: String,
    columnType: String,
    cards: {
        type: [],
        ref: "cards"
    }
});

module.exports = mongoose.model('columns', Column);