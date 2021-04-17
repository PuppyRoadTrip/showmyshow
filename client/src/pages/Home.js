import React, { useState, useEffect } from "react";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import NavTabs from "../components/NavTabs/NavTabs";
import BasicTextFields from "../components/EventSearchInput/EventSearchInput";
import Hero from "../components/Hero/Hero";
import Maps from "../components/Maps/Maps";
import TwitterAPISearch from "../utils/TwitterAPI";
import TwitterCards from "../components/TwitterCard/TwitterCard";
import "./Home.css";

function Home() {
  const [tweetState, setTweetState] = useState([]);

  const handleTwitterAPISearch = async (event) => {
    event.preventDefault();
    console.log(tweetState);
    const tweetList = TwitterAPISearch.then((res) => {
      const { tweets } = res.data;
      setTweetState(tweets);
    });
  };

  return (
    <>
      <HomeHeader />
      <div className="container">
        <div className="row" id="event-input">
          <div className="col s0 m0 l4"></div>
          <div className="col s12 m12 l4">{BasicTextFields()}</div>
          <div className="col s0 m0 l4"></div>
        </div>
        <div className="row" id="home-map">
          <div className="col s0 m0 l4"></div>
          <div className="col s12 m12 l4">
            <Maps />
          </div>
          <div className="col s0 m0 l4"></div>
        </div>
        <div className="row">
          <div className="col s3 m3 l3"></div>
          <div className="col s6 m6 l6">
            <h6>
              <span id="spotlight">Artist Spotlight:</span>
            </h6>
          </div>
          <div className="col s3 m3 l3"></div>
        </div>
        <div className="row" id="hero-card">
          <div className="col s0 m0 l4"></div>
          <div className="col s12 m12 l4">
            <Hero />
            <TwitterCards onLoad={handleTwitterAPISearch} tweets={tweetState} />
          </div>
          <div className="col s0 m0 l4"></div>
        </div>
        <br></br>
        <div className="row" id="nav-tabs">
          <div className="col s0 m0 l4"></div>
          <div className="col s12 m12 l4">
            <NavTabs />
          </div>
          <div className="col s0 m0 l4"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
