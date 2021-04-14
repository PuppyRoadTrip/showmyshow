import axios from "axios";

export default {
  // Gets all shows
  getShows: function() {
    return axios.get("/api/shows");
  }
};
