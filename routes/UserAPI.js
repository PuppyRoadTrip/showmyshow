require('dotenv/config');
const Router = require('express').Router();
const User = require('../models/User');

//Gets all shows for the logged in user
Router.get('/:username', async (req, res) => {
  try {
    User.findOne({username: req.params.username}).then(function (user) {
      res.json(user.savedShows);
      });
  } catch (err) {
    res.status(501);
    res.send('unexpected server error when getting users!');
  }
});

//Posts a show the user saves
Router.post('/:username/show', function (req, res) {
  const savedShow = req.body;
  User.findOneAndUpdate(
    { username: req.params.username },
    { $addToSet: { savedShows: savedShow } },
    { new: true }
  )
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      res.json(err);
    });
});

//Adds the logged in user to our database
Router.post('/:username', async (req, res) => {
  try {
    const user = await User.create({ username: req.params.username });
    res.status(201);
  } catch (err) {
    res.status(501);
    res.send('unexpected server error when posting a user!');
  }
});

module.exports = Router;
