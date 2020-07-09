const mongoose = require('mongoose');
const model = mongoose.model;
const Schema = mongoose.Schema;

const ComicSchema = new Schema({
    Title: {
        type: String,
        required: true
    },
    Writer: {
        type: String,
        required: true
    },
    Issue: {
        type: Number,
        default: 10,
        min: 0
    },
    publisher: {
        type: String
    }
});

const Comic = model('comic', comicSchema);

module.exports = Comic;