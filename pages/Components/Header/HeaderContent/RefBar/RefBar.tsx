import React, {HTMLAttributes} from 'react';
import styles from './RefBar.module.css'
import RefBarItem from "./RefBarItem/RefBarItem";

type RefBarType = HTMLAttributes<HTMLDivElement> & RefBarInterface

interface RefBarInterface {

}

const RefBar: React.FC<RefBarType> = (
    {
        children,
        ...props
    }
) => {
    return (
        <div className={styles.RefBar} {...props}>
                <RefBarItem src={"facebook_logos_PNG19749 1.png"}/>
                <RefBarItem src={"840px-Instagram_logo.png"}/>
                <RefBarItem src={"twitter_PNG12.png"}/>
                <RefBarItem src={"unnamed 1.png"}/>
                <RefBarItem src={"pinterest_logo_red.png"}/>
                <RefBarItem src={"751c58b3268b898387c7453510cb6bf3 1.png"}/>
        </div>
    );
};

export default RefBar;