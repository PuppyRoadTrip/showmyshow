import axios from 'axios';
// Placeholder for abstraction

export default {
  saveShow: function (eventsState) {
    return axios.post('/api/save', {
      show: eventsState,
    });
  },
};

//Old Fetch call that was working
//   const saveShow = async (e) => {
//       e.preventDefault();
//       const requestOptions = {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ show: eventsState[e.target.id] }),
//       };
//       await fetch("/api/save", requestOptions);
//       window.location.replace("/saved");
//     };
