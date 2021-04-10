const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/showmyshow"
);

const userSeed = [
    {
        username: "puppyroadtrip",
        password: "tadaam",
        savedShows: "PRT @ Moda Center",
        favoriteBands: "Outkast",
        location: "Portland",
        showDate: "04/29/21"
    }
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });