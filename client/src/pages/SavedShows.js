import React, { useState, useEffect } from 'react';
import './Style.css';
import SavedShowCard from '../components/SavedShowCard/SavedShowCard';
import SpacingColumn from '../components/MaterialColumn/SpacingColumn';
import CenteringColumn from '../components/MaterialColumn/CenteringColumn';
import NavTabs from '../components/NavTabs/NavTabs';
import SaveShowHeader from '../components/SaveShowHeader/SaveShowHeader';
import axios from 'axios';
import useUserAuth from '../utils/useUserAuth';


function SavedShows() {
  const [user] = useUserAuth();
  const [showState, setShowState] = useState([]);
  useEffect(() => {
    if (user) {
      axios
        .get(`/api/user/${user}`)
        .then((res) => {
          console.log(res.data);
          setShowState(res.data);
        })

        .catch((err) => console.log(err));
    }
  }, [user]);

  
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
                ticketUrl={show.ticketUrl}
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
