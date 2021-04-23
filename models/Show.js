const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const showSchema = new Schema({
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

const Show = mongoose.model('Show', showSchema);
module.exports = Show;