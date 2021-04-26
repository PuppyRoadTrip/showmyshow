import React, { useState, useEffect } from 'react';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import ticketMasterApi from '../utils/ticketMasterApi';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Hero from '../components/Hero/Hero';
import NavTabs from '../components/NavTabs/NavTabs';
import SpacingColumn from '../components/MaterialColumn/SpacingColumn';
import EventAccordions from '../components/Accordian/Accordian';
import './Style.css';
import axios from 'axios';
import CenteringColumn from '../components/MaterialColumn/CenteringColumn';
import twitterApi from '../utils/twitterApi';
import TwitterCards from '../components/TwitterCard/TwitterCard';
import UserAuth from '../utils/userAuth';


function Landing() {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

  const classes = useStyles();
  const [user] = UserAuth();
  const [tweetState, setTweetState] = useState([]);

  useEffect(() => {
    console.log("our user from userAuth is: ", user);
    if (user) {
      axios.post(`/api/user/${user}`, {
        username: user
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    }
    twitterApi.getTweets().then((tweetList) => setTweetState(tweetList));
  }, [user]);

  const [showState, setShowState] = useState({ city: '', state: '' });
  const [eventsState, setEventsState] = useState([]);

  const handleTicketMasterAPISearch = async (event) => {
    event.preventDefault();
    console.log(showState);
    await ticketMasterApi
      .getCityShows(showState.city, showState.state)
      .then((res) => {
        const { events } = res.data._embedded;
        setEventsState(events);
      });
  };

  const saveShow = async (e) => {
    await axios
      .post('/api/save', {
        show: eventsState[e.target.id],
        // figure out which event they clicked on
        // save the title, ticketURL, venue, description, date, image to DB
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.replace('/saved');
  };

  return (
    <>
      <HomeHeader />

      <div className="row" id="nav-row">
          <span id="nav-disp-span">
            <NavTabs />
          </span>
        </div>

      <div className="container">
        <div className="row" id="auth-row">
          <span id="auth-disp-span">
            Signed in as: 
            <br/>
            <UserAuth />
          </span>
        </div>

        <div className="row" id="event-input">
          <SpacingColumn />
          <CenteringColumn
            component={
              <form
                className={classes.root}
                noValidate
                autoComplete="off"
                onSubmit={handleTicketMasterAPISearch}
              >
                <TextField
                  id="outlined-basic"
                  label="City, ST (Ex: Bend, OR)"
                  variant="outlined"
                  onChange={(event) =>
                    setShowState({
                      city: event.target.value.split(',')[0],
                      state: event.target.value.split(', ')[1],
                    })
                  }
                />
                <br></br>
                <Button
                  id="landing-search-btn"
                  variant="contained"
                  color="secondary"
                  type="submit"
                >
                  Search
                </Button>
              </form>
            }
          />
          <SpacingColumn />
        </div>

        <div className="row" id="home-map">
          <SpacingColumn />
          <CenteringColumn
            component={
              <EventAccordions events={eventsState} onClick={saveShow} />
            }
          />
          <SpacingColumn />
        </div>

        <div className="row" id="spotlight-row">
          <h5>
            <span id="spotlight">Artist Spotlight:</span>
          </h5>
        </div>

        <div className="row" id="hero-card">
          <SpacingColumn />
          <CenteringColumn component={<Hero />} />
          <SpacingColumn />
        </div>
        <br></br>

        <div className="row" id="twitter-card-row">
          <SpacingColumn />
          <CenteringColumn component={<TwitterCards tweets={tweetState} />} />
          <SpacingColumn />
        </div>
      </div>
    </>
  );
}

export default Landing;
