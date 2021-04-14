import React from "react";
import HomeHeader from '../components/HomeHeader/HomeHeader';
import BasicTextFields from '../components/EventSearchInput/EventSearchInput';
import SimpleCard from '../components/Hero/Hero';
import Maps from '../components/Maps/Maps';
import SimpleAccordion from '../components/Accordian/Accordian';
import './Home.css';

function Landing() {

    return (
        <>
        <HomeHeader />
        <div className='container'>
            <div className='row' id='app-title'>
                <div className='col s12 m12 l12'>
                    <p>#ShowMyShow</p>
                </div>
            </div>
            <div className='row' id='event-input'>
                <div className='col s12 m12 l12'>
                    {BasicTextFields()}
                </div>
            </div>
            <div className='row' id='hero-card'>
                <div className='col s12 m12 l12'>
                    {SimpleCard()}
                </div>
            </div>
            <br></br>
            <div className='row' id='home-map'>
                <div className='col s12 m12 l12'>
                    <Maps />
                </div>
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