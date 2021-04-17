const mongoose = require('mongoose');
const User = require('../models/User');
const Show = require('../models/Show')

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

const showSeed = [
  {
    title:'',
    ticketUrl:'',
    venue:'',
    date:'',
    description:'',
    image:''
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

Show.deleteMany({})
  .remove({})
  .then(() => Show.collection.insertMany(showSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
