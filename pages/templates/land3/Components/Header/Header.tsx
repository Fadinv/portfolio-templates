import React from 'react';
import styles from './Header.module.css'
import Cart from "./Cart/Cart";

const Header = () => {
    return (
        <div className={styles.Header}>

            <div className={styles.LeftSide}>
                <img className={styles.LeftSideLogo} src="/land3/revo_logo.png" alt="logo"/>

                <div className={styles.LeftSideText}>
                    <span className={styles.LeftPaddingWrap}>your</span>
                    <div className={styles.BackgroundBox}>
                        <span>personalized</span>
                    </div>
                    <span className={styles.LeftPaddingWrap}>cofee</span>
                </div>
            </div>

            <div className={styles.MiddleSide}>

                <img className={styles.MiddleImage} src={'/land3/30072807_909538065884146_2710474531215143694_o.png'}/>

            </div>

            <div className={styles.RightSide}>

                    <Cart num={2}/>

                    <div className={styles.StuckRef}>


                        <nav className={styles.RightSideNav}>

                            <ul className={styles.Ulist}>

                                <li><a className={styles.Ref}>TRANG CHỦ</a></li>

                                <li><a>COFFEE</a></li>

                                <li><a> PHIN MẠ MÀU</a></li>

                                <li><a>COMBO PHIN PHÊ</a></li>

                                <li><a>GIFTSET</a></li>

                                <li><a>LIÊN HỆ</a></li>

                            </ul>

                        </nav>

                    </div>

            </div>

        </div>
    );
};

export default Header;