/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import styles from './chat.module.css';
import Sender from './Chat User/Sender';
import Reciever from './Chat User/Reciever';

const Chat = (props) => {

    const [state, setstate] = useState([""]);


    const keyPress = (e) => {
        if (e.keyCode === 13) {
            console.log("Value ==>", e.target.value);
            setstate(state.concat(e.target.value));
            clearInput();
        }
    }

    const clearInput = () => {

    }


    const list = state.map((i) =>
        <Reciever message={i} />);


    return (
        <>
            <style jsx>{`
        .body {
          margin: 0px;
        }
      `}</style>
            <div className={styles.chatScene}>
                <h1 style={{ color: 'white', marginTop: 10, marginBottom: 10 }}>{props.type}</h1>
                <div className={styles.chatArea}>
                    {list}
                </div>
                <div className={styles.bottom}>
                    <input
                        type="text"
                        placeholder="Enter message... "
                        className={styles.input}
                        // value={state}
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
