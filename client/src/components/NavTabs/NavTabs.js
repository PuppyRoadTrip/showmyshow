import React from 'react';
import '../NavTabs/NavTabs.css';
// import Link from '@material-ui/core/Button';

function NavTabs() {
  return ( 
      <span id='home-links'>
        <a
          variant="contained"
          className="home-buttons"
          id="login"
          href="/login"
        >
         | Login |
        </a>
        <a variant="contained" className="home-buttons" id="login" href="/">
         | Landing |
        </a>
        <a
          variant="contained"
          className="home-buttons"
          id="login"
          href="/saved"
        >
         | Saved |
        </a>
        <a variant="contained" className="home-buttons" id="login" href="/chat">
         | GreenRoom |
        </a>
      </span>
  );
}

export default NavTabs;
