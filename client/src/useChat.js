import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

// const io = require("socket.io-client");
// declares server url for socket; mset to 3001
const SOCKET_SERVER_URL = socketIOClient("http://localhost:3001", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "chat"
  }
});

// Name of event
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"; 

const useChat = (roomId) => {
    //sent and recieved messages
    const [messages, setMessages] = useState([]);
    const socketRef= useRef();

    useEffect(() => {

        //create websocket connection
        socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
            query: { roomId },
        });

        //listen for incoming messages
        socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
            const incomingMessage = {
                ...message,
                ownedByCurrentUser: message.senderId === socketRef.current.id,
            };
            setMessages((messages) => [...messages, incomingMessage]);
        });

        //destroy socketRef when connection is closed
        return () => {
            socketRef.current.disconnect();
        };
    }, [roomId]);

    const sendMessage = (messageBody) => {
        socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
            body: messageBody,
            senderId: socketRef.current.id,
        });
    };

    return { messages, sendMessage };
};

export default useChat;