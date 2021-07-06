import { useParams } from "react-router-dom";
import React, { useState } from 'react';

const Product = () => {

    const { id } = useParams();
    const [product,setProduct] = useState(null);

    fetch('http://localhost:1234/products/' + id)
    .then((res) => {
        return res.json()
    }).then(data => {
        setProduct(data)
    })

    return ( 
        <div>
            <h3>Prodcuts details of { id } </h3>
            <h4>{product && product.name}</h4>
            <h4>{product && product.category}</h4>
            <h4>{product && product.Specs}</h4>
            <h4>{product && product.price}</h4>
        </div>
     );
}
 
export default Product;