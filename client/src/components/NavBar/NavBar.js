import React from 'react';
import NavTabs from '../NavTabs/NavTabs';
import ImageAvatars from '../UserImage/UserImage';
import './NavBar.css';

function NavBar() {
    return (
        <>
            <nav className='navigation'>
                <div className="nav-wrapper">
                <ImageAvatars />
                <span><NavTabs /></span>
                
                </div>
            </nav>
        </>
    );
}

export default NavBar;