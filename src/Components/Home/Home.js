import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Home = () => {
    const [products , setProducts] = useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])
    return (
        <div>
            <h2>Home section</h2>
            {
                products.map(product => <Product 
                    key={product.id}
                product= {product}
                ></Product>)
            }
        </div>
    );
};

export default Home;