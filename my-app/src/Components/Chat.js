/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import styles from './chat.module.css';
import Sender from './Chat User/Sender';
import Reciever from './Chat User/Reciever';

const Chat = () => {

    const [state, setstate] = useState()
    const send = (e) => {
        setstate(e.target.value)
    }


    const keyPress = (e) => {
        if (e.keyCode === 13) {
            console.log("Value ==>", e.target.value);
            setstate(e.target.value);
            clearInput();
        }
    }

    const clearInput = () => {
        
    }

    return (
        <>
            <style jsx>{`
        .body {
          margin: 0px;
        }
      `}</style>
            <div className={styles.chatScene}>

                <Sender message="Hakoona Matata" />
                <Reciever message="Hakoona Matatk" />
                <Sender message={state} />
                <Reciever message="oefhowef" />
                <div className={styles.bottom}>

                    <input
                        type="text"
                        placeholder="Enter message... "
                        className={styles.input}
                        value={state}
                        onKeyDown={keyPress}
                    
                />

                    <div className={styles.SendButton} onClick={send}>
                        <img src="https://cdn.discordapp.com/attachments/715197944202002584/718801319913324584/pngtree-flat-send-button-icon--vector-png-image_1608099.jpg" className={styles.img} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat
