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

                    <div style={{
                        marginTop: '-0.244444em',
                        fontSize: '2.8125em',
                        lineHeight: '1.4'
                    }}>ALPINE</div>


                    <div className={styles.StuckRefWrapper}>
                        <div className={styles.StuckRef}>
                            <span className={styles.StuckRefTitle}>EXPLORE</span>
                            <a href={'/templates/land1'} className={styles.StuckRefItem}>Pricing</a>
                            <a href={'/templates/land1'} className={styles.StuckRefItem}>Mobile</a>
                        </div>

                        <div className={styles.StuckRef}>
                            <span className={styles.StuckRefTitle}>RESOURCES</span>
                            <a  href={'/templates/land1'} className={styles.StuckRefItem}>Blog</a>
                        </div>

                        <div className={styles.StuckRef}>
                            <span className={styles.StuckRefTitle}>Company</span>
                            <a href={'/templates/land1'} className={styles.StuckRefItem}>About us</a>
                            <a href={'/templates/land1'} className={styles.StuckRefItem}>Contact</a>
                        </div>
                    </div>
                </div>


                <div className={styles.StuckRefRight}>
                    <div className={styles.StuckRefRightSocials}>
                        <a href={'/templates/land1'}><img src={'/land1/Vector.svg'}/></a>
                        <a href={'/templates/land1'}><img src={'/land1/Vector1.svg'}/></a>
                        <a href={'/templates/land1'}><img src={'/land1/Vector2.svg'}/></a>
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