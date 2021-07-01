import React, { useState, useEffect } from 'react';

const Products = ({ title }) => {

    const [Products, setProducts] = useState(null);

    useEffect(() => {
        fetch('http://localhost:1234/products')
        .then(res => {
            return res.json()
        })
        .then((data) => {
            setProducts(data);
        })
    }, [])

    return ( 
        <div>
            <h3>The { title } details are </h3>
            {Products && Products.map(product => (
                <div key={ product.id }>
                    <h5>Name of the product</h5>
                    <h6>{ product.name }</h6>
                    <h5>Category of the product</h5>
                    <h6>{ product.category }</h6>
                    <h5>Amount of the product</h5>
                    <h6>{ product.price }</h6>
                    <h5>Specs of the product</h5>
                    <h6>{ product.Specs }</h6>
                </div>
            ))}
        </div>
     );
}
 
export default Products;