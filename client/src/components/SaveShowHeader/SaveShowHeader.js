import React from 'react';
import ImageAvatars from '../UserImage/UserImage';
import SaveDropDown from '../SaveDropDown/SaveDropDown';
import './SaveShowHeader.css';

function SaveShowHeader() {
  return (
    <div className="row" id="saved-header">
      <div className="col s2 m2 l2">
        <ImageAvatars />
      </div>
      <div className="col s8 m8 l8"></div>
      <div className="col s2 m2 l2">
        <SaveDropDown />
      </div>
    </div>
  );
}

export default SaveShowHeader;