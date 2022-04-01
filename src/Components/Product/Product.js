import React from 'react';
import './Product.css'
const Product = (props) => {
    const {product , handleButton} = props;
    const {name , img, price} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h2>Name : {name}</h2>
                <h3>Price : {price}</h3>
            </div>
            <button onClick={() => handleButton(product)} >Add to cart</button>
        </div>
    );
};

export default Product;