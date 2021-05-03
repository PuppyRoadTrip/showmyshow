import React, { useState, useEffect } from 'react';
import './ChatRoom.css';
import socketIOClient from 'socket.io-client';
import GreenRoomHeader from '../../components/GreenRoomHeader/GreenRoomHeader';
import { Link } from 'react-router-dom';
import NavTabs from '../../components/NavTabs/NavTabs';

const socket = socketIOClient('https://showmyshow.herokuapp.com/', {
  withCredentials: true,
  extraHeaders: {
    'my-custom-header': 'chat',
  },
});

const ChatRoom = (props) => {
  const { roomId } = props.match.params;
  const [messages, setMessages] = useState('');
  const [newMessage, setNewMessage] = useState([]);
  const [username, setUsername] = useState(null);
  const [usernameInput, setUsernameInput] = useState('');

  useEffect(() => {
    socket.on('messages', (messages) => {
      setNewMessage((prevMessages) => [...prevMessages, messages]);
    });
  }, []);

  const handleMessage = () => {
    socket.emit('messages', `${username}: ${messages}`);
    setMessages('');
  };

  const handleNewMessageChange = (event) => {
    setMessages(event.target.value);
  };

  const onUpdateUsernameInput = (event) => {
    setUsernameInput(event.target.value);
  };

  const updateUsername = () => {
    setUsername(usernameInput);
  };

  return (
    <>
      <GreenRoomHeader />
      <NavTabs />
      <div className="container">
        {username ? (
          <>
            <div className="row">
              <div className="col s0 m0 l3"></div>
              <div className="col s12 m12 l6">
                <div className="card" id="chat-card">
                  <div className="card-content">
                    <span className="card-title">{roomId}</span>
                    <p>Username: {username}</p>
                  </div>
                </div>
              </div>
              <div className="col s0 m0 l3"></div>
            </div>
            <div className="messages-container">
              <ol className="messages-list">
                {newMessage.map((message, i) => (
                  <li
                    key={i}
                    className={`message-item ${
                      message.ownedByCurrentUser
                        ? 'my-message'
                        : 'received-message'
                    }`}
                  >
                    {message}
                  </li>
                ))}
              </ol>
              <textarea
                value={messages}
                onChange={handleNewMessageChange}
                placeholder="Write message..."
                className="new-message-input-field"
              />
              <button onClick={handleMessage} className="send-message-button">
                Send
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="row">
              <div className="col s0 m0 l3"></div>
              <div className="col s12 m12 l6">
                <div className="card" id='enter-user-card'>
                  <div className="card-content white-text">
                    <span className="card-title">Make a Name for Yourself:</span>
                    <input
                      type="text"
                      placeholder="Username"
                      value={usernameInput}
                      onChange={onUpdateUsernameInput}
                      className="text-input-field"
                    />
                  </div>
                  <div className="card-action" id='bottom-edge'>
                    <Link id='username-link' type="submit" onClick={updateUsername}>
                      Enter
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col s0 m0 l3"></div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ChatRoom;
