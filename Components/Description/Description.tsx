import React from 'react'
import styles from './Description.module.css'

interface DescriptionProps {
    ps?: string
    href?: string
}

const Description: React.FC<DescriptionProps> = ({ps, href}) => {

    return (
        <div className={styles.Description}>
            {href && <h3>Ссылка на исходный код</h3>}
            {href && <a target={'_blank'} href={href}>
                {href}
            </a>}
            {!!ps ? <p className={styles.Ps}>{ps}</p> : null}
        </div>
    )
}

export default Description