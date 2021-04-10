const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    savedShows: String,
    favoriteBands: String,
    location: String,
    showDate: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
