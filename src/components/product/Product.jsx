// import React from 'react';
import './Product.css'

const Product = ({productName, price, imageSrc, productLabelText, imageAltText}) => {
    return (
        <article>
            <span>{productLabelText}</span>
                <img src={imageSrc} alt={imageAltText}/>
            <p>{productName}</p>
            <h4>{price}</h4>
        </article>
    );
};

export default Product;