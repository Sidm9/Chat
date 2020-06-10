/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import styles from '../chat.module.css';
const Sender = (props) => {
    return (
        <div>
            <div className={styles.recieverContainer}>
                <div className={styles.data + " " + styles.dataSend}>
                    {props.message}
                </div>
                <div className={styles.avatarHolder}>
                    <img className={styles.img} alt="Receiever" src="https://picsum.photos/200/300/?blur" />
                </div>
            </div>
        </div>
    )
}

export default Sender
