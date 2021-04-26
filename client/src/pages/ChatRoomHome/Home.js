import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GreenRoomHeader from '../../components/GreenRoomHeader/GreenRoomHeader';
import './Home.css';

const ChatRoomHome = () => {
  const [room, setRoom] = useState('');

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  };

  return (
    <>
      <GreenRoomHeader />
      <div className="container">
        <div className="row" id="gr-card-row">
          <div className="col s0 m0 l3"></div>
          <div className="col s12 m12 l6">
            <div className="card" id="gr-card-body">
              <div className="card-content white-text">
                <span className="card-title">Go ahead, get a room:</span>
                <input
                  type="text"
                  placeholder=" Name your room"
                  value={room}
                  onChange={handleRoomChange}
                  className="text-input-field"
                />
              </div>
              <div className="card-action" id="gr-card-bottom">
                <Link to={`/chat/${room}`} className="enter-room-button">
                  Join Room
                </Link>
              </div>
            </div>
          </div>
          <div className="col s0 m0 l3"></div>
        </div>
      </div>
    </>
  );
};

export default ChatRoomHome;

