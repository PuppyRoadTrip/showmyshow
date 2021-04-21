import React from 'react';
import ImageAvatars from '../UserImage/UserImage';
import LandingDropDown from '../LandingDropDown/LandingDropDown';
import './LandingHeader.css';

function LandingHeader() {
  return (
    <div className="row" id="internal-header">
      <div className="col s2 m2 l2">
        <ImageAvatars />
      </div>
      <div className="col s8 m8 l8"></div>
      <div className="col s2 m2 l2">
        <LandingDropDown />
      </div>
    </div>
  );
}

export default LandingHeader;
