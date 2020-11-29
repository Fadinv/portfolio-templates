import React from 'react';
import styles from "./ButtonStuck.module.css";

const ButtonStuck = () => {
    return (
        <div className={styles.ButtonStuck}>
            <button className={styles.WithBg}>MUA NGAY</button>
            <button className={styles.WithoutBg}>CHI TIẾT</button>
        </div>
    );
};

export default ButtonStuck;