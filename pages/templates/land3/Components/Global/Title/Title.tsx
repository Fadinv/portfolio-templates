import React from 'react';
import styles from "./Title.module.css";
import CSS from 'csstype'

interface TitleProps {
    text: string
    description: string
    paddingTop?: CSS.Property.PaddingTop
    reverseBackground?: boolean
}

const Title: React.FC<TitleProps> = (props) => {

    const titleClassesArray = [styles.Title]

    if (props.reverseBackground) titleClassesArray.push(styles.Reverse)

    return (
        <div className={titleClassesArray.join(' ')} style={{
            paddingTop: props.paddingTop,
        }}>
            <span className={styles.TitleTop}>{props.description}</span>
            <h2 className={styles.TitleBottom}>{props.text}</h2>
        </div>
    );
};

export default Title;