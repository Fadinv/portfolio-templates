import React from 'react';
import styles from './TemplatesItem.module.css'
import Link from "next/link";
import Description from '../../Description/Description'

interface TemplatesItemProps {
    src: string
    land?: 1 | 2 | 3
    href?: string
    descriptionType?: 'clicker' | 'cdlook'
}

const TemplatesItem: React.FC<TemplatesItemProps> = (props) => {
    return (
        <div className={styles.TemplatesItem}>
            <div className={styles.PhotoBox}>
                {props.href ? <a href={props.href}>
                    <img className={styles.Img} src={props.src}/>
                </a> : null}
                {props.land ? <Link href={`/templates/land${props.land}`}>
                    <img className={styles.Img} src={props.src}/>
                </Link> : null}
            </div>
            {props.descriptionType ? <Description descriptionType={props.descriptionType}/>: null}
        </div>
    );
};

export default TemplatesItem;