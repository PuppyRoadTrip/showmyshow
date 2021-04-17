import React from 'react';
import InternalHeader from '../components/InternalHeader/InternalHeader';
import './Home.css';
import SavedShowCard from '../components/SavedShowCard/SavedShowCard';
import NavTabs from '../components/NavTabs/NavTabs';

function SavedShows() {
  return (
    <>
      <InternalHeader />
      <div className="row" id="saved-row">
        <div className="col s3 m3 l3"></div>
        <div className="col s6 m6 l6">
          <h5>
            <span id="saved-banner">Saved Shows</span>
          </h5>
          <div className="col s3 m3 l3"></div>
        </div>
      </div>
      <div className="container">
        <div className="row" id="hero-card">
          <div className="col s0 m0 l4"></div>
          <div className="col s12 m12 l4">
            <SavedShowCard />
          </div>
          <div className="col s0 m0 l4"></div>

          <div className="col s0 m0 l4"></div>
          <div className="col s12 m12 l4">
            <SavedShowCard />
          </div>
          <div className="col s0 m0 l4"></div>

          <div className="col s0 m0 l4"></div>
          <div className="col s12 m12 l4">
            <SavedShowCard />
          </div>
          <div className="col s0 m0 l4"></div>
        </div>
        <NavTabs />
      </div>
    </>
  );
}

export default SavedShows;
