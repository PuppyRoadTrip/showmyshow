var Twitter = require("twitter");
require("dotenv/config");

const apiKey = process.env.REACT_APP_TWITTER_API_KEY;
const apiSecretKey = process.env.REACT_APP_TWITTER_SECRET_API_KEY;
const accessToken = process.env.REACT_APP_TWITTER_ACCESS_TOKEN;
const accessSecretToken = process.env.REACT_APP_TWITTER_SECRET_ACCESS_TOKEN;

const TwitterAPISearch = (setTweetState) => {
  const client = new Twitter({
    consumer_key: apiKey,
    consumer_secret: apiSecretKey,
    access_token_key: accessToken,
    access_token_secret: accessSecretToken,
  });

  return client.get(
    "search/tweets",
    { q: "#showmyshow" },
    function (error, tweets, response) {
      if (error) {
        alert("check console for err from Twitter")
        console.error(error);
      }
      setTweetState(tweets.statuses)
      // tweets.statuses.map(function (tweet) {
      //   console.log(tweet.user.screen_name + ": " + tweet.text);
      //   // cannot return a forEach? Need to change way we grab this value
      //   return tweet;
      // });
    }
  );
};

export default TwitterAPISearch;
