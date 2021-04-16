import React, { useState } from "react";
import HomeHeader from '../components/HomeHeader/HomeHeader';
import TMAPI from "../utils/TMAPI";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Hero from '../components/Hero/Hero';
import Maps from '../components/Maps/Maps';
import NavTabs from '../components/NavTabs/NavTabs';
import EventAccordions from '../components/Accordian/Accordian';
import './Home.css';

function Landing() {

    const useStyles = makeStyles((theme) => ({
        root: {
            width: "100%",
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
    }));

    const classes = useStyles();

    const [showState, setShowState] = useState({ city: "", state: "" });
    const [eventsState, setEventsState] = useState([]);

    const handleTMAPISearch = async (event) => {
        event.preventDefault();
        console.log(showState);
        const showList = await TMAPI.getCityShows(showState.city, showState.state).then(res => {
            const { events } = res.data._embedded;
            setEventsState(events)
        })
    };

    return (
        <>
            <HomeHeader />
            <div className='container'>
                <div className='row' id='event-input'>
                    <div className='col s0 m0 l4'></div>
                    <div className='col s12 m12 l4'>
                        {/* Break this compnent into form and button */}
                        <form
                            className={classes.root}
                            noValidate
                            autoComplete="off"
                            onSubmit={handleTMAPISearch}
                        >
                            <TextField
                                id="outlined-basic"
                                label="City, ST (Ex: Bend, OR)"
                                variant="outlined"
                                onChange={(event) =>
                                    setShowState({
                                        city: event.target.value.split(",")[0],
                                        state: event.target.value.split(", ")[1],
                                    })
                                }
                            />
                            <Button variant="contained" color="secondary" type="submit">
                                Search
                            </Button>
                        </form>
                    </div>
                    <div className='col s0 m0 l4'></div>
                </div>
                <div className='row' id='home-map'>
                    <div className='col s0 m0 l4'></div>
                    <div className='col s12 m12 l4'>
                        <Maps />
                    </div>
                    <div className='col s0 m0 l4'></div>
                </div>
                <div className='row' id='hero-card'>
                    <div className='col s0 m0 l4'></div>
                    <div className='col s12 m12 l4'>
                        <h6><span id='spotlight'>Artist Spotlight:</span></h6>
                        <Hero />
                    </div>
                    <div className='col s0 m0 l4'></div>
                </div>
                <br></br>
                <div className='row' id='home-map'>
                    <div className='col s12 m12 l12'>
                        {/* need to pass props (event array) into this accordion!!! */}
                        <EventAccordions events={eventsState} />
                    </div>
                </div>
                <div className='row' id='nav-tabs'>
                    <div className='col s0 m0 l4'></div>
                    <div className='col s12 m12 l4'>
                        <NavTabs />
                    </div>
                    <div className='col s0 m0 l4'></div>
                </div>
            </div>
        </>
    )
}

export default Landing;