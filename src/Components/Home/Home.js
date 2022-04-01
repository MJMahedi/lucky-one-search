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
        console.log(name , price);
        const newCart = [...cart, product];
        setCart(newCart);
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
            <div className="cart-container">
                <h2> Cart Item : {cart.length}</h2>
                
                {
                    cart.map(bike => <Cart key= {bike.id} cart= {cart}></Cart>  )
                }
                <button>Choose Any</button>
                <button>Clear </button>
            </div>
        </div>
    );
};

export default Home;