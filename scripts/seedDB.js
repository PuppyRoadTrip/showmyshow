const mongoose = require('mongoose');
const User = require('../models/User');
// const Show = require('../models/Show')

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/showmyshow', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSeed = [
  {
    username: 'puppyroadtrip',
    password: 'tadaam',
    savedShows: [{
      title: 'show',
      ticketUrl: 'link',
      venue: 'place',
      date: 'now',
      info: 'stuff',
      pleaseNote: 'important',
      image: 'pic'
    }],
  },
];


User.deleteMany({})
  .remove({})
  .then(() => User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// Show.deleteMany({})
//   .remove({})
//   .then(() => Show.collection.insertMany(showSeed))
//   .then((data) => {
//     console.log(data.result.n + ' records inserted!');
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });
