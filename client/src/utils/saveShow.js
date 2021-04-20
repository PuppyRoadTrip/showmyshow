import axios from 'axios';
// Placeholder for abstraction

export default {
  // Gets all save
  getShows: function() {
    return axios.get("/api/saved/");
  },
  // Gets the book with the given id
  getShows: function(id) {
    return axios.get("/api/saved/" + id);
  },
  // Deletes the book with the given id
  deleteShows: function(id) {
    return axios.delete("/api/saved/" + id);
  },
  // Saves a book to the database
  saveShows: function(showData) {
    return axios.post("/api/saved/", showData);
  }
};

