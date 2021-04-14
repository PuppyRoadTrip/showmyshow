import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
require("dotenv/config");

const APIkey = process.env.TM_API_KEY;

const ShowSearch = () => {
    return axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=Portland&stateCode=OR&apikey=${APIkey}`)
};

export default ShowSearch;

// export default {
//     searchCity: function(city, state) {
//         return axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=${city}&stateCode=${state}&apikey=${APIkey}`)
//     }
// };

// searchCity('Portland', 'OR')
//       .then((res) => console.log(res.data))
//       .catch((err) => console.log(err));