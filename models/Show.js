const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const showSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ticketUrl: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const Show = mongoose.model("Show", showSchema);

module.exports = Show;