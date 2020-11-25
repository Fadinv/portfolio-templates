import React from 'react';
import styles from './Templates.module.css'

const Templates = ({children}) => {

    return (
        <div className={styles.Templates}>
            {children}
        </div>
    );
};

export default Templates;