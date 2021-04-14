import React from "react";
import HomeHeader from '../components/HomeHeader/HomeHeader';
import BasicTextFields from '../components/EventSearchInput/EventSearchInput';
import Hero from '../components/Hero/Hero';
import Maps from '../components/Maps/Maps';
import SimpleAccordion from '../components/Accordian/Accordian';
import './Home.css';

function Landing() {

    return (
        <>
        <HomeHeader />
        <div className='container'>
            <div className='row' id='event-input'>
                <div className='col s0 m0 l4'></div>
                <div className='col s12 m12 l4'>
                    {BasicTextFields()}
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
                    <SimpleAccordion />
                </div>
            </div>
            <div className='row' style={{justifyContent: 'center'}}>
                <div className='col s12 m12 l12'>
                <a className="waves-effect waves-light btn-small">Logout</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Landing;