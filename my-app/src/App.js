import React, { useState } from 'react';
import './App.css';
import Chat from './Components/Chat.js';

function App() {

  const [main, setMain] = useState([]);

  const callBack = (ChildData) => {
    setMain(main.concat(ChildData));
    console.log("Parent", {main})
  }

  return (
    <div className="container">
      <div className="App">
        <Chat type = "Reciever" callBack = {callBack} />
      </div>
      <div className="App">
        <Chat type="Sender" />
        
      </div>
    </div>
  );
}

export default App;


