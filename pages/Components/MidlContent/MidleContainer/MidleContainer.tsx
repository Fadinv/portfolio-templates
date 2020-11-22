import React from 'react';
import styles from './MidleContainer.module.css'
import Photos from "./Photos/Photos";
import Marketing from "./Marketing/Marketing";
import Person from "./Person/Person";

const MidleContainer = () => {
    return (
        <div className={styles.MidleContainer}>

            <div className={styles.WithBackground}>

                <Photos/>

                <Marketing/>

                <Person/>

            </div>

        </div>
    );
};

export default MidleContainer;