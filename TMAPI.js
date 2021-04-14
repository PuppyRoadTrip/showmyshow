require("dotenv/config");
const fetch = require('node-fetch');

const APIkey = process.env.TM_API_KEY;

function searchTicketMaster() {
  fetch(
    "https://app.ticketmaster.com/discovery/v2/events.json?size=15&apikey=" +
      APIkey
  )
    .then((res) => res.json())
    .then((result) => console.log(result._embedded.events[1]._embedded.venues[0].city.name + ', ' + result._embedded.events[1]._embedded.venues[0].state.stateCode)),
    (error) => console.log(error);
}

// ("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=JXAUfAxtClrIfr0jjt81uhCbzuiqtjAh");

searchTicketMaster();
