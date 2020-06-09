import React from 'react'
import styles from '../chat.module.css';

const Reciever = (props) => {
    return (
        <div>
            <div className={styles.senderContainer}>
                <div className={styles.avatarHolder}>
                    <img className={styles.img} alt="Sender" src="https://picsum.photos/200/300/?blur" />
                </div>
                <div className={styles.data}>
                     {props.message}
        </div>
            </div>
        </div>
    )
}

export default Reciever
