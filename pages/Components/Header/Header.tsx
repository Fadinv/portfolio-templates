import React, {HTMLAttributes} from 'react';
import styles from './Header.module.css'
import NavBar from "./NavBar/NavBar";
import HeaderContent from "./HeaderContent/HeaderContent";

type HeaderType = HTMLAttributes<HTMLDivElement> & HeaderInterface
interface HeaderInterface {
    children: React.ReactNode
}

const Header: React.FC<HeaderType> = ({children, ...props}) => {
    return (
        <div className={styles.Header}>
            <div className={styles.secondLayer}>
                {children}
            </div>
            <div className={styles.wrapperImg}>
                <img className={styles.img} src={'/Rectangle1.png'}></img>
            </div>
        </div>
    );
};

export default Header;