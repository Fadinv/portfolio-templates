import React from 'react';
import styles from './TabBar.module.css'
import Title from "../Global/Title/Title";

const TabBar = (props) => {
    return (
        <div className={styles.TabBar}>
            
            <Title text={'GIFTSET'} description={'Best Gift For Best Friend'}/>

            <div className={styles.BackgroundBox}>
            </div>

            {props.children}
            
        </div>
    );
};

export default TabBar;