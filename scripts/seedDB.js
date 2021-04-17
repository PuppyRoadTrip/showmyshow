const mongoose = require('mongoose');
const db = require('../models');

require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_KEY;

mongoose.connect(MONGODB_URI || 'mongodb://localhost/showmyshow', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSeed = [
  {
    username: 'puppyroadtrip',
    password: 'tadaam',
    savedShows: 'PRT @ Moda Center',
    favoriteBands: 'Outkast',
    location: 'Portland',
    showDate: '04/29/21',
  },
];

db.User.deleteMany({})
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
