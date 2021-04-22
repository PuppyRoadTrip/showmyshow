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

Router.post('/save', async (req, res) => {
  try {
    console.log('we got a saved User with: ', req.body);
    const savedUser = await User.create(req.body);
    res.status(201);
    res.send(savedUser);
  } catch (err) {
    res.status(501);
    console.log('error in the save post route: ', err);
    res.send('unexpected server error when posting a User!');
  }
});

module.exports = Router;
