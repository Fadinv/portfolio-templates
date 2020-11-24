import React from 'react';
import styles from './BottomText.module.css'

interface BottomTextProps {
    title: string
    text: string
}

const BottomText: React.FC<BottomTextProps> = (props) => {
    return (
        <div className={styles.BottomText}>

            <h4 className={styles.Title}>{props.title}</h4>

            <p className={styles.Text}>{props.text}</p>

        </div>
    );
};

export default BottomText;