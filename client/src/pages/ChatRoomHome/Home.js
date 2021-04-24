import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const ChatRoomHome = () => {
    const [room, setRoom] = useState('');
    // const [username, setUsername] = useState('');

    // const handleUsername = (e) => {
    //     setUsername(e.target.value);
    //     console.log(username);
    // };

    const handleRoomChange = (e) => {
        setRoom(e.target.value);
        console.log(room)
    };



    return (
        <div className='home-container'>
            {/* <input
                type='text'
                placeholder='Username'
                value={username}
                onChange={handleUsername}
                className='text-input-field'
            /> */}
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