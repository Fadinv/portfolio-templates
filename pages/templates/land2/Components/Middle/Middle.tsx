import React from 'react';
import styles from './Middle.module.css'
import Top from "./Top/Top";
import Center from "./Center/Center";
import Bottom from "./Bottom/Bottom";

const Middle = () => {
    return (
        <div className={styles.Middle}>

            <Top/>

            <Center/>

            <Bottom/>

        </div>
    );
};

export default Middle;