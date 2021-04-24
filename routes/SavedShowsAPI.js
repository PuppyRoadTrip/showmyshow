require('dotenv/config');
const Router = require('express').Router();
const User = require('../models/User');

Router.get('/user/:id/shows', async (req, res) => {
  try {
    console.log('we are getting to shows get route');
    const savedUser = await User.findById(req.params.id);
    res.json(savedUser.savedShows);
  } catch (err) {
    res.status(501);
    console.log('error in the shows get route: ', err);
    res.send('unexpected server error when getting shows!');
  }
});

Router.post('/user/:id/show', function (req, res) {
  console.log('our request is: ', req.body);
  const savedShow = req.body;
  User.findOneAndUpdate(
    { _id: req.params.id },
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

module.exports = Router;
