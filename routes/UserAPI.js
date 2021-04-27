require('dotenv/config');
const Router = require('express').Router();
const User = require('../models/User');

Router.get('/:username', async (req, res) => {
  try {
    console.log('we are getting to all users');
    const users = await User.find({
      username: req.params.username,
    });
    res.json(user);
  } catch (err) {
    res.status(501);
    res.send('unexpected server error when getting users!');
  }
});


Router.get('/:username/shows', (req, res) => {
  try {
    console.log("our request to the shows route is: ", req.body);
    User.findOne({ username: req.params.username })
    
    .then(function () {
        res.send(req.body.savedShows);
      }
    );
  } catch (err) {
    res.status(501);
    console.log('error in the shows get route: ', err);
    res.send('unexpected server error when getting shows!');
  }
});

Router.post('/:username/show', function (req, res) {
  console.log('our request is: ', req.body);
  const savedShow = req.body;
  User.findOneAndUpdate(
    { username: req.params.username },
    { $addToSet: { savedShows: savedShow } },
    { new: true }
  )
    .then(function (dbUser) {
      console.log('our user with new show is:', dbUser);
      res.json(dbUser);
    })
    .catch(function (err) {
      res.json(err);
    });
});

Router.post('/:username', async (req, res) => {
  try {
    console.log('we got a user with: ', req.body);
    const user = await User.create({ username: req.params.username });
    console.log('our post request for user is: ', user);
    res.status(201);
  } catch (err) {
    res.status(501);
    console.log('error in the users post route: ', err);
    res.send('unexpected server error when posting a user!');
  }
});

module.exports = Router;
