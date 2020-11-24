import React, {HTMLAttributes} from 'react';
import styles from './MidlContent.module.css'
import MidleContainer from "./MidleContainer/MidleContainer";
import MiddleBottom from "./MiddleBottom/MiddleBottom";

type MidlContentType = HTMLAttributes<HTMLDivElement> & MidlContentInterface

interface MidlContentInterface {

}

const MidlContent: React.FC<MidlContentType> = ({...props}) => {
    return (
        <>
            <div className={styles.MidlContent} {...props}>
                <div className={styles.gradient}>
                    {/*<img className={styles.image} src={'Rectangle 2.png'}/>*/}

                    <MidleContainer/>

                    <MiddleBottom />

                </div>
            </div>


        </>
    );
};

export default MidlContent;