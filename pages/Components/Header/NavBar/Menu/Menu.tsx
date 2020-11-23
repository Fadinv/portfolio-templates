import React, {HTMLAttributes, ReactNode, RefObject} from 'react';
import styles from "./Menu.module.css";

type MenuType = HTMLAttributes<any> & MenuInterface

interface MenuInterface {
    children?: ReactNode
}

const Menu = React.forwardRef<MenuInterface>(
    (
        {
            children,
            ...props
        },
        ref: RefObject<HTMLUListElement>
    ) => {


        const openMenu = () => {
            const menu = ref.current

            menu.classList.toggle(styles.isOpen)
        }

        const offReference = (e) => {
            e.preventDefault()
        }

        return (
            <div {...props} className={styles.Menu}>
                <button onClick={openMenu} className={styles.button}>
                    &#8801;
                </button>
                <ul ref={ref} className={styles.ul}>
                    <li className={styles.li}><a onClick={offReference} href={'/'}>about us</a></li>
                    <li className={styles.li}><a onClick={offReference} href={'/'}>pricing</a></li>
                    <li className={styles.li}><a onClick={offReference} href={'/'}>mobile</a></li>
                    <li className={styles.li}><a onClick={offReference} href={'/'}>blog</a></li>
                </ul>
            </div>
        );
    });

export default Menu;