import React from 'react';
import styles from './Product.module.css'
import Title from "../Global/Title/Title";

interface ProductProps {
    variant: 'left' | 'right'
    text: string
    description: string
}

const Product: React.FC<ProductProps> = ({variant, text, description, ...props}) => {

    const backgroundBoxStyles = [styles.BackgroundBox]

    if (variant === 'right') {
        backgroundBoxStyles.push(styles.Right)
    }


    return (
        <div className={styles.Product}>

            <div className={backgroundBoxStyles.join(' ')}>

            </div>

            <Title
                paddingTop={`calc(90*100vw/1400)`}
                text={text}
                description={description}
            />

            <>
                {props.children}
            </>

        </div>
    );
};

export default Product;