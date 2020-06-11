import React from 'react'
import styles from './chat.module.css';
import { useHistory } from 'react-router-dom';
const WhoAreYou = (props) => {
    const history = useHistory();
    const handleSubmit = (e) => {
        if (e.keyCode === 13 && e.target.value.trim() !== '') {
            console.log("User ==>", e.target.value);
            link(e.target.value);
        }
    }
    const link = (username) => {
        console.log(username);
        history.push({ pathname : "/chat", data: username });

    }

    return (
        <>
            <div className={styles.chatScene} style={{ justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "auto" }}>
                    <h2 className={styles.h2}>Who are you?</h2>

                    <input placeholder="Enter Name" onKeyDown={handleSubmit} className={styles.input} />

                </div>
            </div>
        </>
    )
}

export default WhoAreYou
