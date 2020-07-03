import React, { useState, useEffect } from 'react';
import './App.css';
import io from "socket.io-client";
import Chat from './Components/Chat.js';
import { useLocation } from "react-router-dom";
import Sender from './Components/Chat User/Sender';

const socket = io("http://localhost:3001", {
  transports: ["websocket", "polling"]
});


function App() {
  const location = useLocation();
  const [users, setUsers] = useState(location.data);
  const [messages, setMessages] = useState([
    {
      message: "Annie Are you okay?",
      type: "out",
    },
    {
      message: "Annie Are you okay?",
      type: "in",
    },
    {
      message: "Are you okay annie?",
      type: "out",
    },
    {
      message: "You've been hit by ",
      type: "in",
    },
    {
      message: "You've been stuck by ",
      type: "out",
    },
    {
      message: "You've been stuck by ",
      type: "in",
    },
    {
      message: "A smooth criminal 🕺🏻",
      type: "out",
    },
    {
      message: "Aaaaaoooooo!!!! 🕺🏻",
      type: "in",
    },

  ]);

  useEffect(() => {
    // Sender();
  }, [])



  const callBack = (ChildData) => {
    setMessages(main => [...main, { message: ChildData, type: "out" }]);
    socket.emit("chat message", ChildData);
    socket.on('chat message', (msg) => {

    });
  }

  return (
    <div className="container">
      <div className="App">
        <Chat type="Person1" callBack={callBack} dataFromParent={messages} />
      </div>

    </div>
  );
}

export default App;