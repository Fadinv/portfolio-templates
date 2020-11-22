import React, {HTMLAttributes, ReactNode} from 'react';
import styles from "./Menu.module.css";

type MenuType = HTMLAttributes<any> & MenuInterface
interface MenuInterface {
    children?: ReactNode
}

const Menu: React.FC<MenuType> = ({children, ...props}) => {
    return (
        <div {...props} className={styles.Menu}>
            <button className={styles.button}>
                &#8801;
            </button>
            <ul className={styles.ul}>
                <li className={styles.li}><a href={'/'}>about us</a></li>
                <li className={styles.li}><a href={'/'}>pricing</a></li>
                <li className={styles.li}><a href={'/'}>mobile</a></li>
                <li className={styles.li}><a href={'/'}>blog</a></li>
            </ul>
        </div>
    );
};

export default Menu;