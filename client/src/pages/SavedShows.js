import React, {useState, useEffect} from 'react';
// import InternalHeader from '../components/InternalHeader/InternalHeader';
import './Style.css';
import SavedShowCard from '../components/SavedShowCard/SavedShowCard';
import SpacingColumn from '../components/MaterialColumn/SpacingColumn';
import CenteringColumn from '../components/MaterialColumn/CenteringColumn';
import NavTabs from '../components/NavTabs/NavTabs';
import SaveShowHeader from '../components/SaveShowHeader/SaveShowHeader';
import axios from "axios";
import UserAuth from "../utils/userAuth"

function SavedShows() {
  const user = UserAuth();
  console.log("your username is:", user)
  const [showState, setShowState] = useState([])

  useEffect(() => {
      axios
        .get(`/api/user/${user}/shows`)
        .then((res) =>  {
          console.log(res)
          setShowState(res.data)
        })
        .catch((err) => console.log(err));
  }, [user]);

  return (
    <>
      <SaveShowHeader />
      <br></br>

      <div className="container">
        <div className="row" id="spotlight-row">
          <h5>
            <span id="spotlight">Saved Shows</span>
          </h5>
        </div>

        <div className="row">
          <SpacingColumn />
          <CenteringColumn component={showState.map((show) => <SavedShowCard title={show.title} image={show.image} date={show.date} info={show.info} pleaseNote={show.pleaseNote} venue={show.venue} ticketURl={show.ticketUrl} />)} />
          <SpacingColumn />
        </div>
        <NavTabs />
      </div>
    </>
  );
}

export default SavedShows;
