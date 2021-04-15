const Router = require("express").Router();
const User = require("../models/user");

Router.get("/", async (req, res) => {
    try {
        console.log("we are getting to all users");
        const users = await User.find();
        res.json(user);
    } catch (err) {
        res.status(501);
        console.log("error in the users get route: ", err);
        res.send("unexpected server error when getting users!");
    }
});

Router.post("/", async (req, res) => {
    try {
        console.log("we got a user with: ", req.body);
        const user = await User.create(req.body);
        res.status(201);
        res.send(user._id);
    } catch (err) {
        res.status(501);
        console.log("error in the users post route: ", err);
        res.send("unexpected server error when posting a user!");
    }
});

module.exports = Router;