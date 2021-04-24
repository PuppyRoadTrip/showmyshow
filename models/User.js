const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  savedShows: {
    type: Array,
    ref: "Show"
  }
});
const User = mongoose.model('User', userSchema);
module.exports = User;