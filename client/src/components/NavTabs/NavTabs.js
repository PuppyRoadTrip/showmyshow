import React from 'react';
import '../NavTabs/NavTabs.css';
import UserAuth from '../../utils/userAuth';
// import Link from '@material-ui/core/Button';

function NavTabs() {
  return (
    <>
    <div className='container'>
      <div class="row">
        {/* <div className="col s0 m0 l3"></div> */}
        <div class="col s12 m12 l12">
          <div class="card" id='nav-card'>
            <div class="card-content white-text">
              <span class="card-title">
                Hello, <UserAuth />
              </span>
              {/* <a
                variant="contained"
                className="home-buttons"
                id="login"
                href="/login"
              >
                | Login |
              </a> */}
              <a
                variant="contained"
                className="home-buttons"
                id="login"
                href="/"
              >
                | Home |
              </a>
              <a
                variant="contained"
                className="home-buttons"
                id="login"
                href="/saved"
              >
                | Saved |
              </a>
              <a
                variant="contained"
                className="home-buttons"
                id="login"
                href="/chat"
              >
                | Green Room |
              </a>
            </div>
          </div>
        </div>
        {/* <div className="col s0 m0 l3"></div> */}
      </div>
      </div>
    </>
  );
}

export default NavTabs;
