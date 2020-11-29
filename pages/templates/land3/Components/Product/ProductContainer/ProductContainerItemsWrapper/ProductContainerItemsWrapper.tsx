import React, {HTMLAttributes} from 'react';
import styles from './ProductContainerItemsWrapper.module.css'

type ProductContainerItemsWrapperProps = HTMLAttributes<HTMLDivElement> & ProductContainerItemsWrapperInterface

interface ProductContainerItemsWrapperInterface {
    variant?: 'push' | 'none'
}

const ProductContainerItemsWrapper: React.FC<ProductContainerItemsWrapperProps> = (props) => {

    const ProductContainerItemsWrapperClasses = [styles.ProductContainerItemsWrapper]

    if (props.variant === 'push') {
        ProductContainerItemsWrapperClasses.push(styles.Push)
    }

    return (
        <div {...props} className={ProductContainerItemsWrapperClasses.join(' ')}>
            {props.children}
        </div>
    );
};

export default ProductContainerItemsWrapper;