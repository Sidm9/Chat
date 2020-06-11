/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react';
import styles from './chat.module.css';
import Sender from './Chat User/Sender';
import Reciever from './Chat User/Reciever';
import { useLocation } from "react-router-dom";

const Chat = (props) => {
    const location = useLocation();
    // const [state, setstate] = useState([null]);
    const [text, setText] = useState();
    const keyPress = (e) => {
        if (e.keyCode === 13 && e.target.value.trim() !== '') {
            console.log("Value ==>", e.target.value);
            // setstate(state.concat(e.target.value));
            props.callBack(e.target.value);
            setText('');
        }
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }


    const messages = props.dataFromParent.map((i) =>
        (i.type === "out") ?
            <Sender message={i.message} /> : <Reciever message={i.message} />);


    return (
        <>
            <style jsx>{`
        .body {
          margin: 0px;  
        }
      `}</style>
            <div className={styles.chatScene}>
                <h1 style={{ color: 'white', marginTop: 10, marginBottom: 10 }}>{location.data}</h1>
                <div className={styles.chatArea}>
                    {messages}
                </div>
                <div className={styles.bottom}>
                    <input
                        type="text"
                        placeholder="Enter message... "
                        className={styles.input}
                        value={text}
                        onChange={handleOnChange}
                        onKeyDown={keyPress}
                    />

                    {/*  <div className={styles.SendButton} onClick={send}>
                        <img src="https://cdn.discordapp.com/attachments/715197944202002584/718801319913324584/pngtree-flat-send-button-icon--vector-png-image_1608099.jpg" className={styles.img} />
                    </div>
                    */}

                </div>
            </div>
        </>
    )
}

export default Chat
