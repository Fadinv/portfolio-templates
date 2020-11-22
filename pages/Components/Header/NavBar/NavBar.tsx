import React, {HTMLAttributes, ReactNode} from 'react';
import styles from "./NavBar.module.css";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

type NavBarType = HTMLAttributes<any> & NavBarInterface

interface NavBarInterface {
    children?: ReactNode
}

const NavBar: React.FC<NavBarType> = ({children, ...props}) => {
    return (
        <nav className={styles.NavBar}>
            <Logo/>
            <Menu/>
        </nav>
    );
};

export default NavBar;