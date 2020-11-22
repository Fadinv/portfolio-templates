import React, {HTMLAttributes} from 'react';
import styles from './Photos.module.css';

type PhotosType = HTMLAttributes<HTMLDivElement> & PhotosInterface

interface PhotosInterface {

}

const Photos: React.FC<PhotosType> = ({...props}) => {
    return (
        <div {...props} className={styles.Photos}>

            <div className={styles.photo1}>
                <img src={'/photo1.png'} />
            </div>

            <div className={styles.photo2}>
                <img src={'/photo2.png'} />
            </div>

            <div className={styles.photo3}>
                <img src={'/photo3.png'} />
            </div>

        </div>
    );
};

export default Photos;