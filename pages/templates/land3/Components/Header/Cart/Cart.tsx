import React from 'react';
import styles from './Cart.module.css'

interface CartProps {
    num: number
}

const Cart: React.FC<CartProps> = (props) => {
    return (
        <div className={styles.Cart}>

            <img src={'/land3/shopping-cart-3.svg'} />

            <div className={styles.NumberProduct}>
                <span className={styles.Number}>{props.num}</span>
            </div>

        </div>
    );
};

export default Cart;