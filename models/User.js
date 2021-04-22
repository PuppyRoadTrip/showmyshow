const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  savedShows: [{
    title: {
      type: String,
    },
    ticketUrl: {
      type: String,
    },
    venue: {
      type: String,
    },
    date: {
      type: String,
    },
    info: {
      type: String,
    },
    pleaseNote: {
      type: String,
    },
    image: {
      type: String,
    },
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;