import React, { useState } from 'react';
import './Cart.css'
const Cart = (props) => {  
    // const {name , handleButton }= props;
const {name ,price ,randomGenerate} = props.bike;
    // console.log(props.bike);
    
    return (
        <div  className= 'cart-items' >
            <h2>{name} </h2> <br />
            <h4>{price}</h4>
        </div>
    );
};

export default Cart;