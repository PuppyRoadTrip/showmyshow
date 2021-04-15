import React from 'react';
import ImageAvatars from '../UserImage/UserImage';
import './HomeHeader.css';

function HomeHeader() {
    return (
        <div className='row' id='header'>
            <div className='col s12 m12 l12'>
                <ImageAvatars />
                <p id='app-title'>#ShowMyShow</p>
            </div>
        </div>
    );
}

export default HomeHeader;