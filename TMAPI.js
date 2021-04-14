require("dotenv/config");
const fetch = require("node-fetch");

const APIkey = process.env.TM_API_KEY;
const city = "Portland";
const state = "OR";

function searchTicketMaster() {
  fetch(
    "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=" +
      city +
      "&stateCode=" +
      state +
      "&apikey=" +
      APIkey
  )
    .then((res) => res.json())
    .then(
      (result) => {
        result.forEach((event) => {
          const eventInfo = {
            name: result._embedded.events[i].name,
            info: result._embedded.events[i].info,
            note: result._embedded.events[i].pleaseNote,
          };
          console.log(eventInfo);
        });
      },
      (error) => console.log(error)
    );
}

// ("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=JXAUfAxtClrIfr0jjt81uhCbzuiqtjAh");

searchTicketMaster();

// .then((result) => console.log(result._embedded.events[1]._embedded.venues[0].city.name + ', ' + result._embedded.events[1]._embedded.venues[0].state.stateCode))

// 'lat: ', result._embedded.events[1]._embedded.venues[0].location.latitude, 'long: ', result._embedded.events[1]._embedded.venues[0].location.longitude

// "https://app.ticketmaster.com/discovery/v2/events.json?size=15&apikey=" +
//       APIkey
