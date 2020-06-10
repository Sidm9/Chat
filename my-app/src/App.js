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
  ]);

  const callBack = (ChildData) => {
    setMain(...main, { message: ChildData, type: "in" });
    // console.log("Parent", { main })
  }

  // const callBack2 = (ChildData) => {
  //   setMain(main.concat(ChildData));
  //   console.log("Parent", { main })
  // }

  return (
    <div className="container">
      <div className="App">
        <Chat type="Person1" callBack={callBack} dataFromParent={main} />
      </div>
      
    </div>
  );
}

export default App;


