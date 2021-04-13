const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

// mongoose.connect("mongodb+srv://allpuppies:pupp13r0@dtr1p@cluster0.4zg1x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });
const MONGODB_URI = "mongodb+srv://allpuppies:pupp13r0adtr1p@cluster0.4zg1x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI || "mongodb://localhost/showmyshow", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

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

db.User.deleteMany({})
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