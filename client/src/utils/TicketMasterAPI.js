import axios from "axios";

export default {
  // Gets all shows
  getShows: function () {
    return axios.get("/api/shows");
  },

  // Get shows for specific city
  getCityShows: function (city, state) {
    return axios.get("/api/shows/" + city + "/" + state);
  }
};
