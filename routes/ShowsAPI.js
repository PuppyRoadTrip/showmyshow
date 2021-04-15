require("dotenv/config");
const Router = require("express").Router();

Router.get("/", async (req, res) => {
  try {
    const fetch = require("node-fetch");

    const APIkey = process.env.TM_API_KEY;
    const city = "Portland";
    const state = "OR";

    const TMData = await fetch(
      "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=" +
        city +
        "&stateCode=" +
        state +
        "&apikey=" +
        APIkey
    ).then((res) => res.json());
    res.json(TMData);
  } catch (err) {
    res.status(501);
    console.log("error in the shows get route: ", err);
    res.send("unexpected server error when getting shows!");
  }
});

Router.get("/:city/:state", async (req, res) => {
  const APIkey = process.env.TM_API_KEY;
  const city = req.params.city;
  const state = req.params.state;
  console.log(city, state);

  try {
    const fetch = require("node-fetch");

    const TMData = await fetch(
      "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=" +
        city +
        "&stateCode=" +
        state +
        "&apikey=" +
        APIkey
    ).then((res) => res.json());
    res.json(TMData);
  } catch (err) {
    res.status(501);
    console.log("error in the shows get route: ", err);
    res.send("unexpected server error when getting shows!");
  }
});

module.exports = Router;
