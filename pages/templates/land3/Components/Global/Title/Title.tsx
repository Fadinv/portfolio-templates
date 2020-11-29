import React from 'react';
import styles from "./Title.module.css";
import CSS from 'csstype'

interface TitleProps {
    text: string
    description: string
    paddingTop?: CSS.Property.PaddingTop
}

const Title: React.FC<TitleProps> = (props) => {
    return (
        <div className={styles.Title} style={{
            paddingTop: props.paddingTop
        }}>
            <span className={styles.TitleTop}>{props.description}</span>
            <h2 className={styles.TitleBottom}>{props.text}</h2>
        </div>
    );
};

export default Title;