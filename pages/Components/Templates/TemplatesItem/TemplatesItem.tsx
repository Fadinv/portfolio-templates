import React from 'react';
import styles from './TemplatesItem.module.css'
import Link from "next/link";

interface TemplatesItemProps {
    src: string
    land: 1 | 2 | 3
}

const TemplatesItem: React.FC<TemplatesItemProps> = (props) => {
    return (
        <div className={styles.TemplatesItem}>
            <div className={styles.PhotoBox}>
                <Link href={`/templates/land${props.land}`}>
                    <img className={styles.Img} src={props.src}/>
                </Link>

            </div>


        </div>
    );
};

export default TemplatesItem;