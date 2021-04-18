import axios from 'axios';
// Placeholder for abstraction

export default {
  saveShow: function (eventsState) {
    return axios.post('/api/save', {
      show: eventsState,
    });
  },
};

