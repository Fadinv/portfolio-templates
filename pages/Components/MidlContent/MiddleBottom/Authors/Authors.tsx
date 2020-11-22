import React from 'react';
import styles from './Authors.module.css'

const Authors: React.FC = () => {
    return (
        <div className={styles.Authors}>
            <div className={styles.author}>
                <img className={styles.AuthorImage} src={'/3fdcbd965ae8f5bfc65cae1c955a1d6d 1.png'}/>
            </div>
            <div className={styles.author}>
                <img className={styles.AuthorImage} src={'/aspire-logo-1000x1000 1.png'}/>
            </div>
            <div className={styles.author}>
                <img className={styles.AuthorImage} src={'/nylas-logo-sticky 1.png'}/>
            </div>
            <div className={styles.author}>
                <img className={styles.AuthorImage} src={'/bitwise 1.png'}/>
            </div>
        </div>
    );
};

export default Authors;