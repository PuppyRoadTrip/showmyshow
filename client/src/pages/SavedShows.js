import React, { useState, useEffect } from 'react';
// import InternalHeader from '../components/InternalHeader/InternalHeader';
import './Style.css';
import SavedShowCard from '../components/SavedShowCard/SavedShowCard';
import SpacingColumn from '../components/MaterialColumn/SpacingColumn';
import CenteringColumn from '../components/MaterialColumn/CenteringColumn';
import NavTabs from '../components/NavTabs/NavTabs';
import SaveShowHeader from '../components/SaveShowHeader/SaveShowHeader';
import axios from 'axios';
import UserAuth from '../utils/userAuth';

function SavedShows() {
  const [userId, setUserId] = useState([]);
  const user = UserAuth();
  const [showState, setShowState] = useState([]);

  // const getUserInfo = () => {
  //   const authenticatedUser = UserAuth();
  //   axios.get(`/api/user/users`).then((res) => {
  //     const users = res.data;
  //     users.map((user) => {
  //       if (user.username == authenticatedUser) {
  //         setUserId(user._id);
  //         console.log(userId);
  //       }
  //     });
  //   });
  // };

  const getUserInfo = () => {
    const authenticatedUser = UserAuth();
    axios.get(`/api/user/${authenticatedUser}`).then((res) => {
      console.log(res.data);
      setShowState(res.data);
    });
  };

  getUserInfo();

  // useEffect(() => {
  //   getUserInfo();
  // }, []);

  return (
    <>
      <SaveShowHeader />
      <NavTabs />
      <br></br>

      <div className="container">
        <div className="row" id="spotlight-row">
          <h5>
            <span id="spotlight">Saved Shows</span>
          </h5>
        </div>

        <div className="row">
          <SpacingColumn />
          <CenteringColumn
            component={showState.map((show) => (
              <SavedShowCard
                title={show.title}
                image={show.image}
                date={show.date}
                info={show.info}
                pleaseNote={show.pleaseNote}
                venue={show.venue}
                ticketURl={show.ticketUrl}
              />
            ))}
          />
          <SpacingColumn />
        </div>
      </div>
    </>
  );
}

export default SavedShows;
