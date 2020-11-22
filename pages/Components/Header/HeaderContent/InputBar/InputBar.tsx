import React, {HTMLAttributes} from 'react';
import styles from './InputBar.module.css'

type InputBarType = HTMLAttributes<HTMLDivElement> & InputBarInterface

interface InputBarInterface {

}

const InputBar: React.FC<InputBarType> = () => {
    return (
        <div className={styles.InputBar}>
            <input className={styles.input} placeholder={'Enter your work email !'}/>
            <button className={styles.button}>Request acces</button>
        </div>
    );
};

export default InputBar;