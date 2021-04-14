import React from 'react';
import NavTabs from '../NavTabs/NavTabs';
import './NavBar.css';

function NavBar() {
    return (
        <>
            <nav className='navigation'>
                <div className="nav-wrapper">
                    <NavTabs />
                </div>
            </nav>
        </>
    );
}

export default NavBar;