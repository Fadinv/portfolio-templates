import React from 'react'
import styles from './Description.module.css'

interface DescriptionProps {
    descriptionType: 'clicker' | 'cdlook'
}

const Description: React.FC<DescriptionProps> = ({descriptionType}) => {

    return (
        <div className={styles.Description}>
            <h3>Ссылка на исходный код</h3>
            <a href={descriptionType === 'clicker' ? 'https://github.com/Fadinv/clicker' : 'https://github.com/Fadinv/cdl'}>
                {descriptionType === 'clicker' ? 'https://github.com/Fadinv/clicker' : 'https://github.com/Fadinv/cdl'}
            </a>
            {descriptionType === 'clicker' ? <p className={styles.Ps}>Ps. Фоновую музыку я написал сам, поэтому дал вам возможность ее отключить :)</p> : null}
        </div>
    )
}

export default Description