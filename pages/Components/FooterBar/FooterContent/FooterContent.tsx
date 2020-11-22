import React, {HTMLAttributes} from 'react';
import styles from './FooterContent.module.css'

type FooterContentType = HTMLAttributes<HTMLDivElement> & FooterContentInterface

interface FooterContentInterface {

}

const FooterContent: React.FC<FooterContentType> = ({...props}) => {
    return (
        <div {...props} className={styles.FooterContent}>
            <div className={styles.FooterHeader}>

                <div className={styles.LeftBarWrapper}>

                    <div>ALPINE</div>


                    <div className={styles.StuckRefWrapper}>
                        <div className={styles.StuckRef}>
                            <span className={styles.StuckRefTitle}>EXPLORE</span>
                            <span className={styles.StuckRefItem}>Pricing</span>
                            <span className={styles.StuckRefItem}>Mobile</span>
                        </div>

                        <div className={styles.StuckRef}>
                            <span className={styles.StuckRefTitle}>RESOURCES</span>
                            <span className={styles.StuckRefItem}>Blog</span>
                        </div>

                        <div className={styles.StuckRef}>
                            <span className={styles.StuckRefTitle}>Company</span>
                            <span className={styles.StuckRefItem}>About us</span>
                            <span className={styles.StuckRefItem}>Contact</span>
                        </div>
                    </div>
                </div>


                <div className={styles.StuckRefRight}>
                    <div className={styles.StuckRefRightSocials}>
                        <div><img src={'vector.svg'}/></div>
                        <div><img src={'vector1.svg'}/></div>
                        <div><img src={'vector2.svg'}/></div>
                    </div>
                    <span className={styles.StuckRefRightTitle}>Team & Privacy</span>
                    <span className={styles.StuckRefRightItem}>&copy; Thread Groop inc.</span>
                </div>

            </div>
            <div className={styles.FooterHello}>Thanks for watching</div>
        </div>
    );
};

export default FooterContent;