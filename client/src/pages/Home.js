import React, { useState, useEffect } from 'react';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import NavTabs from '../components/NavTabs/NavTabs';
import BasicTextFields from '../components/EventSearchInput/EventSearchInput';
import Hero from '../components/Hero/Hero';
import Maps from '../components/Maps/Maps';
import twitterApi from '../utils/twitterApi';
import TwitterCards from '../components/TwitterCard/TwitterCard';
import SpacingColumn from '../components/MaterialColumn/SpacingColumn';
import CenteringColumn from '../components/MaterialColumn/CenteringColumn';
import './Style.css';

function Home() {
  const [tweetState, setTweetState] = useState([]);

  useEffect(() => {
    twitterApi.getTweets().then((tweetList) => setTweetState(tweetList));
  }, []);

  return (
    <>
      <HomeHeader />
      <div className="container">
{/* Consider moving login/signup option to nav bar */}
      <div className="row" id="nav-tabs">
          <SpacingColumn />
            <CenteringColumn component={<NavTabs />}/>
          <SpacingColumn />
        </div>

        <div className="row" id="event-input">
          <SpacingColumn />
            <CenteringColumn component={BasicTextFields()}/>
          <SpacingColumn />
        </div>

        <div className="row" id="home-map">
          <SpacingColumn />
            <CenteringColumn component={<Maps />}/>
          <SpacingColumn />
        </div>

        <div className='row' id='spotlight-row'>
            <h5><span id='spotlight'>Artist Spotlight:</span></h5>
        </div>

        <div className="row" id="hero-card">
          <SpacingColumn />
            <CenteringColumn component={<Hero />}/>
          <SpacingColumn />
        </div>
        <br></br>

        <div className='row' id='twitter-card-row'>
            <SpacingColumn />
              <CenteringColumn component={<TwitterCards tweets={tweetState} />}/>
            <SpacingColumn />
        </div>
    
      </div>
    </>
  );
}

export default Home;