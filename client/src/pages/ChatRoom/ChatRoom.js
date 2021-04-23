import React, { useState } from 'react';
import './ChatRoom.css';
import useChat from '../../useChat';

const ChatRoom = (props) => {
  const { roomId} = props.match.params;
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = useState("");
  const [username, setUsername] = useState(null);
  const [usernameInput, setUsernameInput] = useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    console.log(newMessage)
    setNewMessage("");
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
              {messages.map((message, i) => (
                <li
                  key={i}
                  className={`message-item ${message.ownedByCurrentUser ? "my-message" : "received-message"
                    }`}
                >
                  {username}: {message.body}
                </li>
              ))}
            </ol>
            <textarea
              value={newMessage}
              onChange={handleNewMessageChange}
              placeholder="Write message..."
              className="new-message-input-field"
            />
            <button onClick={handleSendMessage} className="send-message-button">
              Send
        </button>
          </div>
        </>
      ) : (
        <>
          <label for="username">Username</label>
          <input
            type='text'
            placeholder='Username'
            value={usernameInput}
            onChange={onUpdateUsernameInput}
            className='text-input-field'
          />
          <button onClick={updateUsername}>SUBMIT</button>
        </>
      )}
    </div>
  );
};

export default ChatRoom;