import React, {HTMLAttributes} from 'react'
import styles from './Header.module.css'

type HeaderType = HTMLAttributes<HTMLDivElement> & HeaderInterface

interface HeaderInterface {
    children: React.ReactNode
}

const Header: React.FC<HeaderType> = ({children}) => {
    return (
        <div className={styles.Header}>
            <div className={styles.secondLayer}>
                {children}
            </div>
            <div className={styles.wrapperImg}>
                <img className={styles.img} src={'/land1/Rectangle1.png'} alt={''}/>
            </div>
        </div>
    )
}

export default Header