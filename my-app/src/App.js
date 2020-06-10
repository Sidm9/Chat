/* eslint-disable react/jsx-pascal-case */

import React, { useState } from 'react';
import './App.css';
import Chat from './Components/Chat.js';
/* eslint-disable-next-line  */
import Chat_ from './Components/Chat_.js';
function App() {

  const [main, setMain] = useState([
    {
      message: "This is a message",
      type: "out",
    },
    {
      message: "This is a message",
      type: "in",
    },
    {
      message: "This is a message",
      type: "in",
    },
    {
      message: "This is a message",
      type: "out",
    },
    {
      message: "This is a message",
      type: "in",
    },

  ]);

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


