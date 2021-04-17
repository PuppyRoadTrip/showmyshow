const Router = require("express").Router();
const Twitter = require("twitter");
require("dotenv/config");

const apiKey = process.env.TWITTER_API_KEY;
const apiSecretKey = process.env.TWITTER_SECRET_API_KEY;
const accessToken = process.env.TWITTER_ACCESS_TOKEN;
const accessSecretToken = process.env.TWITTER_SECRET_ACCESS_TOKEN;

Router.get("/", async (req, res) => {
    const client = new Twitter({
        consumer_key: apiKey,
        consumer_secret: apiSecretKey,
        access_token_key: accessToken,
        access_token_secret: accessSecretToken,
    });

    client.get(
        "search/tweets",
        { q: "#showmyshow" },
        function (error, tweets, response) {
            if (error) {
                console.error(error);
                res.status(501);
            }
            res.json(tweets.statuses.map(tweet => (
                {
                    screen_name: tweet.user.screen_name,
                    text: tweet.text
                })));
        });
});

module.exports = Router;
