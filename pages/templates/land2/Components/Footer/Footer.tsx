import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <a className={styles.RefEmail}>info@eco-cabins.com</a>
            <img src={'/land2/Logo horizontal.svg'} className={styles.Image} />
            <div className={styles.InfoBox}>
                <a>Cookie</a>
                <a>Privacybeleid</a>
            </div>
        </div>
    );
};

export default Footer;