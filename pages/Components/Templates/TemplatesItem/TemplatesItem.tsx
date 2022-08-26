import React from 'react';
import styles from './TemplatesItem.module.css'
import Link from "next/link";
import Description from '../../Description/Description'

interface TemplatesItemProps {
    src: string
    land?: 1 | 2 | 3
    href?: string
    description?: boolean
    ps?: string
    github?: string
    title?: string
}

const TemplatesItem: React.FC<TemplatesItemProps> = (props) => {
    return (
        <div className={styles.TemplatesItem}>
            {!!props.title ? <span className={styles.TemplateItemTitle}>
                {props.title}
                <a target={'_target'} href={props.href}>
                    (кликни сюда, чтобы открыть)
                </a>
            </span> : null}
            <div className={styles.PhotoBox}>
                {props.href ? <a target={'_target'} href={props.href}>
                    <img className={styles.Img} src={props.src}/>
                </a> : null}
                {props.land ? <a target={'_target'} href={`/templates/land${props.land}`}>
                    <img className={styles.Img} src={props.src}/>
                </a> : null}
            </div>
            {props.description ? <Description href={props.github} ps={props.ps}/>: null}
        </div>
    );
};

export default TemplatesItem;