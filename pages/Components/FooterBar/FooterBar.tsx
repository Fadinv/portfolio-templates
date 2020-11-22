import React, {HTMLAttributes} from 'react';
import styles from './FooterBar.module.css'
import FooterContent from "./FooterContent/FooterContent";

type FooterBarType = HTMLAttributes<HTMLDivElement> & FooterBarInterface

interface FooterBarInterface {

}

const FooterBar: React.FC<FooterBarType> = ({...props}) => {
    return (
        <div {...props} className={styles.FooterBar}>

            <FooterContent />

            <div className={styles.circle}>

            </div>

            <div className={styles.redCircle}>

            </div>
        </div>
    );
};

export default FooterBar;