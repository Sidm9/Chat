/* eslint-disable react/jsx-pascal-case */

import React, { useState, useEffect } from 'react';
import './App.css';
import io from "socket.io-client";
import Chat from './Components/Chat.js';


const socket = io("http://localhost:3000", {
  transports: ["websocket", "polling"]
});


function App() {

  const [main, setMain] = useState([
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

  // useEffect(() => {

  //   socket.on("connect", () => {
  //     socket.emit("Connected User");
  //   })

  //   socket.on("disconnect", () => {
  //     socket.emit("Disconneted User");
  //   })

  //   socket.on("message", message => {
  //     callBack(message);
  //   })

  //  // socket.emit("sent", message);


  // }, [])

  const callBack = (ChildData) => {
    setMain(main => [...main, { message: ChildData, type: "out" }]);
  }

  return (
    <div className="container">
      <div className="App">
        <Chat type="Person1" callBack={callBack} dataFromParent={main} />
      </div>

    </div>
  );
}

export default App;


