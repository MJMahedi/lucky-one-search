import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee , faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'
const Product = (props) => {
    const {product , handleButton} = props;
    const {name , img, price} = product;
    console.log(img);
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h2>Name : {name}</h2>
                <h3>Price : $ {price}</h3>
            </div>
            <button onClick={() => handleButton(product)} className="btn-cart" >
                <p className='btn-text'>Add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;