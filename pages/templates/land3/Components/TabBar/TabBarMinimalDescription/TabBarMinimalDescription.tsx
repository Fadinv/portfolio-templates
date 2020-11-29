import React from 'react';
import styles from './TabBarMinimalDescription.module.css'

interface TabBarMinimalDescriptionProps {
    src: string
    title: string
    text: string
}

const TabBarMinimalDescription: React.FC<TabBarMinimalDescriptionProps> = ({src, text, title}) => {
    return (
        <div className={styles.TabBarMinimalDescription}>
            <img src={src} />

            <div className={styles.TabBarMinimalDescriptionBox}>
                <p className={styles.TabBarMinimalDescriptionTitle}>{title}</p>
                <p className={styles.TabBarMinimalDescriptionText}>{text}</p>
            </div>
        </div>
    );
};

export default TabBarMinimalDescription;