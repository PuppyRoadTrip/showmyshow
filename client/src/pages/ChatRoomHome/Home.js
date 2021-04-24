import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const ChatRoomHome = () => {
    const [room, setRoom] = useState('');

    const handleRoomChange = (e) => {
        setRoom(e.target.value);
    };

    return (
        <div className='home-container'>
            <input
                type='text'
                placeholder='Room'
                value={room}
                onChange={handleRoomChange}
                className='text-input-field'
            />
            <Link to={`/${room}`} className='enter-room-button'>
                Join Room
            </Link>
        </div>
    );
};

export default ChatRoomHome;