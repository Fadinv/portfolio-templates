import React from 'react';
import styles from './ProductItem.module.css'

type ProductItemProps = {
    variant: 'flex' | 'box'
    src: string
    price: string
    oldPrice?: string
    title: string
    description: string
}

const ProductItem: React.FC<ProductItemProps> = ({variant, src, price, oldPrice, title, description}) => {

    const productItemStyles = [styles.ProductItem]

    if (variant === 'box') {
        productItemStyles.push(styles.BoxStyle)
    }

    return (
        <div className={productItemStyles.join(' ')}>

            <div className={styles.ImageBox}>
                <img className={styles.Image} src={`/land3/${src}`}/>
            </div>

            <div className={styles.ProductMenu} >
                <div >
                    <div className={styles.ProductMenuPriceBar}>
                        <p className={styles.ProductMenuPrice}>{price}</p>
                        {oldPrice ? <p className={styles.ProductMenuLineThrough}>{oldPrice}</p> : null}
                    </div>
                    <p className={styles.ProductMenuTitle}>{title}</p>
                    <p className={styles.ProductMenuDescription}>{description}</p>
                </div>


                <div className={styles.ProductMenuNavBar}>
                    <button className={styles.ProductMenuBuyButton}>MUA NGAY</button>
                    <button className={styles.ProductMenuRefButton}>CHI TIẾT</button>
                </div>
            </div>

        </div>
    );
};

export default ProductItem;