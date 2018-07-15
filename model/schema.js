const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rpsSchema = new Schema({
    name: String,
    score: Number
});

module.exports = mongoose.model('rps', rpsSchema);