import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Home.css'
const Home = () => {
    const [products , setProducts] = useState([]);

    const [cart , setCart] =useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[]);

    const handleButton = (product) =>{
        // console.log(product.name);
        const {name ,price} = product;
        // console.log(name , price);
        const newCart = [...cart, product];
        // console.log(newCart , 'select');
        setCart(newCart);
    }
    const randomGenerate = (bike) =>{
        
        let x = Math.floor((Math.random() * cart.length) + 1);
        console.log(x);
        document.getElementById("selected-item").innerHTML = setCart[x];
        
    }
    const clear = () =>{
        
        document.getElementById("selected-item").innerHTML = '';
        
    }
    return (
        <div className='shop-container'>
            
            <div className="product-container">
            {
                products.map(product => <Product 
                    key={product.id}
                product= {product}
                handleButton={handleButton}
                ></Product>)
            }
            </div>
            <div className="cart-container" >
            
                <h2> Cart Item : {cart.length}</h2>   
                <div className='selected-item' id='selected-item'>
                {
                    cart.map(bike => <Cart key= {bike.id} cart= {cart} bike={bike} ></Cart>  )
                }
                    </div>             
                              
                <button onClick={() =>randomGenerate()}>Choose Any</button><br />
                <button onClick={clear}>Clear </button>
            </div>
        </div>
    );
};

export default Home;