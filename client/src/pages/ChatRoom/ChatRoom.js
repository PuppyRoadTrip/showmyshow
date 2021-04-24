import React, { useState, useEffect } from 'react';
import './ChatRoom.css';
import socketIOClient from "socket.io-client";


const socket= socketIOClient("http://localhost:3000", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "chat"
  }
});

const ChatRoom = (props) => {
  const { roomId } = props.match.params;
  const [ messages, setMessages ] = useState("");
  const [newMessage, setNewMessage] = useState([]);
  const [username, setUsername] = useState(null);
  const [usernameInput, setUsernameInput] = useState("");

  useEffect(() => {
    socket.on("messages", messages => {
      setNewMessage(prevMessages => [...prevMessages, messages]);
    });
  }, []);

  const handleMessage = () => {
    socket.emit("messages", `${username}: ${messages}`);
    setMessages("");
  };

  const handleNewMessageChange = (event) => {
    setMessages(event.target.value);
  };

  const onUpdateUsernameInput = event => {
    setUsernameInput(event.target.value);
  };

  const updateUsername = () => {
    setUsername(usernameInput);
  };

  return (
    <div className="chat-room-container">
      {username ? (
        <>
          <h1 className="room-name">Room: {roomId} Username: {username}</h1>
          <div className="messages-container">
            <ol className="messages-list">
              {newMessage.map((message, i) => (
                <li
                  key={i}
                  className={`message-item ${message.ownedByCurrentUser ? "my-message" : "received-message"
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
          <input
            type='text'
            placeholder='Username'
            value={usernameInput}
            onChange={onUpdateUsernameInput}
            className='text-input-field'
          />
          <button type='submit' onClick={updateUsername}>SUBMIT</button>
        </>
      )}
    </div>
  );
};

export default ChatRoom;