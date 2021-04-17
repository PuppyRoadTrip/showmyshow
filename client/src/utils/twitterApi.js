import axios from 'axios';

export default {
  // Gets all tweets
  getTweets: function () {
    return axios.get('/api/twitter').then((res) => res.data);
  },
};
