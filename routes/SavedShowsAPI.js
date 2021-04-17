require("dotenv/config");
const Router = require("express").Router();
const Show = require("../models/Show")

Router.get("/saved", async (req, res) => {
    try {
        console.log("we are getting to saved shows");
        const savedShows = await Show.find();
        res.json(savedShows);
    } catch (err) {
      res.status(501);
      console.log("error in the saved shows get route: ", err);
      res.send("unexpected server error when getting shows!");
    }
  });

  Router.post("/save", async (req, res) => {
    try {
        console.log("we got a saved show with: ", req.body);
        const savedShow = await Show.create(req.body);
        res.status(201);
        res.send(savedShow);
    } catch (err) {
        res.status(501);
        console.log("error in the save post route: ", err);
        res.send("unexpected server error when posting a show!");
    }
});

module.exports = Router;