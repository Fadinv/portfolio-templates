import React, {HTMLAttributes} from 'react';
import styles from './RefBarItem.module.css'

type RefBarItemType = HTMLAttributes<HTMLDivElement> & RefBarItemInterface

interface RefBarItemInterface {
    src: string
}

const RefBarItem: React.FC<RefBarItemType> = ({src, ...props}) => {
    return (
        <div {...props} className={styles.RefBarItem}>
            <img className={styles.image} src={src} alt={'Картинка'} />
        </div>
    );
};

export default RefBarItem;