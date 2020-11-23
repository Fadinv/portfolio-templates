import React, {HTMLAttributes} from 'react';
import styles from './RefBarItem.module.css'

type RefBarItemType = HTMLAttributes<HTMLAnchorElement> & RefBarItemInterface

interface RefBarItemInterface {
    src: string
}

const RefBarItem: React.FC<RefBarItemType> = ({src, ...props}) => {
    return (
        <a {...props} href={'/'} className={styles.RefBarItem}>
            <img className={styles.image} src={src} alt={'Картинка'} />
        </a>
    );
};

export default RefBarItem;