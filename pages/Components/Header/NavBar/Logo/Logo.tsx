import React, {HTMLAttributes} from 'react';
import styles from "./Logo.module.css";

type LogoType = HTMLAttributes<HTMLDivElement> & LogoInterface

interface LogoInterface {

}

const Logo: React.FC<LogoType> = ({children, ...props}) => {
    return (
        <div className={styles.Logo}>
            <div className={styles.wrapperImg}>
                <img className={styles.img} src={'/logo.svg'}/>
            </div>
            <div className={styles.wrapperLi}>
                <li className={styles.li}>alpine</li>
            </div>
        </div>
    );
};

export default Logo;