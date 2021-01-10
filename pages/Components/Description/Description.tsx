import React from 'react'
import styles from './Description.module.css'

const myDescription = {
    clicker: {
        src: 'https://github.com/Fadinv/clicker',
        ps: 'Фоновую музыку я написал сам, поэтому дал вам возможность ее отключить :)',
    },
    cdlook: {
        src: 'https://github.com/Fadinv/cdl',
        ps: false
    }
}

interface DescriptionProps {
    descriptionType: 'clicker' | 'cdlook'
}

const Description: React.FC<DescriptionProps> = ({descriptionType}) => {

    const props = myDescription[descriptionType]
    if (!props) return
    if (!props.src) return

    return (
        <div className={styles.Description}>
            <h3>Ссылка на исходный код</h3>
            <a href={props.src}>{props.src}</a>
            {props.ps ? <p className={styles.Ps}>Ps. {props.ps}</p> : null}
        </div>
    )
}

export default Description