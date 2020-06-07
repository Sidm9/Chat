import React from 'react';
import './App.css';
import Chat from './Components/Chat.js';

function App() {
  return (
    <div className="container">
      <div className="App">
        <Chat type = "Reciever" />
      </div>
      <div className="App">
        <Chat type = "Sender"/>
      </div>
    </div>
  );
}

export default App;


