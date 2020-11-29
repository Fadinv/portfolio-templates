import React from 'react';
import styles from './InfoBarItem.module.css'

interface InfoBarItemProps {
    src: string
    title: string
    description: string
}

const InfoBarItem: React.FC<InfoBarItemProps> = (props) => {
    return (
        <div className={styles.InfoBarItem}>
            <img className={styles.InfoBarItemImg} src={props.src}/>
            <h3 className={styles.InfoBarItemTitle}>{props.title}</h3>
            <span className={styles.InfoBarItemDescription}>{props.description}</span>
        </div>
    );
};

export default InfoBarItem;