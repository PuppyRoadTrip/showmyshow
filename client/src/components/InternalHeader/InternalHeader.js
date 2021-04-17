import React from 'react';
import ImageAvatars from '../UserImage/UserImage';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import './InternalHeader.css';

function InternalHeader() {
  return (
    <div className="row" id="internal-header">
      <div className="col s2 m2 l2">
        <ImageAvatars />
      </div>
      <div className="col s8 m8 l8"></div>
      <div className="col s2 m2 l2">
        <DropDownMenu />
      </div>
    </div>
  );
}

export default InternalHeader;
