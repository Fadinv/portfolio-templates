import React from 'react';
import styles from './MiddleBottom.module.css'
import Companies from "./Companies/Companies";
import Authors from "./Authors/Authors";

const MiddleBottom: React.FC = () => {
    return (
        <div className={styles.MiddleBottom}>

            <Authors />

            <Companies />

        </div>
    );
};

export default MiddleBottom;