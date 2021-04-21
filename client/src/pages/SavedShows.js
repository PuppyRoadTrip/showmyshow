import React from 'react';
// import InternalHeader from '../components/InternalHeader/InternalHeader';
import './Style.css';
import SavedShowCard from '../components/SavedShowCard/SavedShowCard';
import SpacingColumn from '../components/MaterialColumn/SpacingColumn';
import CenteringColumn from '../components/MaterialColumn/CenteringColumn';
import NavTabs from '../components/NavTabs/NavTabs';
import SaveShowHeader from '../components/SaveShowHeader/SaveShowHeader';

function SavedShows() {
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
          <CenteringColumn component={<SavedShowCard />} />
          <SpacingColumn />
        </div>
        <NavTabs />
      </div>
    </>
  );
}

export default SavedShows;
