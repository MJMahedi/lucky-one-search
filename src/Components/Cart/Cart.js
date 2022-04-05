import React, { useState } from 'react';
import './Cart.css'
const Cart = (props) => {  
    // const {name , handleButton }= props;
const {name ,price ,randomGenerate ,show } =  props.bike;
// console.log(show);
    // console.log(props.bike);
    
    return (
        <div  className= 'cart-items' >
            
            <h2>{name} </h2> <br />
           
        </div>
    );
};

export default Cart;