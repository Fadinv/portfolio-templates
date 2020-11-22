import React from 'react';
import styles from './Marketing.module.css'

const Marketing: React.FC = () => {
    return (
        <div className={styles.Marketing}>
            <span className={styles.title}>Marketing</span>
            <span className={styles.dash}>
                <p className={styles.dash1}></p>
                <p className={styles.dash2}></p>
                <p className={styles.dash3}></p>
                <p className={styles.dash4}></p>
                <p className={styles.dash5}></p>
                <p className={styles.dash6}></p>
                <p className={styles.dash7}></p>
                <p className={styles.dash8}></p>
                <p className={styles.dash9}></p>
                <p className={styles.dash10}></p>
                <p className={styles.dash11}></p>
                <p className={styles.dash12}></p>
                <p className={styles.dash13}></p>
                <p className={styles.dash14}></p>
                <p className={styles.dash15}></p>
                <p className={styles.dash16}></p>
            </span>
            <div className={styles.chat}>
                <img src={'chat.svg'}/>
            </div>
            <button className={styles.button}>
                <img src={'pinter.svg'}/>
                Start a thread
            </button>
        </div>
    );
};

export default Marketing;