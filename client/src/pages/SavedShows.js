import React from 'react';
import InternalHeader from '../components/InternalHeader/InternalHeader';
import './Style.css';
import SavedShowCard from '../components/SavedShowCard/SavedShowCard';
import SpacingColumn from '../components/MaterialColumn/SpacingColumn';
import CenteringColumn from '../components/MaterialColumn/CenteringColumn';
import NavTabs from '../components/NavTabs/NavTabs';

function SavedShows() {
  return (
    <>
      <InternalHeader />
      <NavTabs />
      <br></br>

      <div className="container">
        <div className="row" id="spotlight-row">
          <h6>
            <span id="spotlight">Saved Shows</span>
          </h6>
        </div>

        <div className="row">
          <SpacingColumn />
          <CenteringColumn component={<SavedShowCard />} />
          <SpacingColumn />
        </div>
      </div>
    </>
  );
}

export default SavedShows;
