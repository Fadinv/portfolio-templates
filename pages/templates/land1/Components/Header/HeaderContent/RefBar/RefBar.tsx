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
                <RefBarItem src={"/land1/facebook_logos_PNG19749 1.png"}/>
                <RefBarItem src={"/land1/840px-Instagram_logo.png"}/>
                <RefBarItem src={"/land1/twitter_PNG12.png"}/>
                <RefBarItem src={"/land1/unnamed 1.png"}/>
                <RefBarItem src={"/land1/pinterest_logo_red.png"}/>
                <RefBarItem src={"/land1/751c58b3268b898387c7453510cb6bf3 1.png"}/>
        </div>
    );
};

export default RefBar;