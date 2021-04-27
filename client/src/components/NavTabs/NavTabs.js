import React from 'react';
import '../NavTabs/NavTabs.css';
import UserAuth from '../../utils/userAuth';

function NavTabs() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card" id="nav-card">
              <div className="card-content white-text">
                <span className="card-title">
                  Hello, <UserAuth />
                </span>
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
        </div>
      </div>
    </>
  );
}

export default NavTabs;
