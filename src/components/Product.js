import { useParams, useHistory } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const Product = () => {

    const { id } = useParams();
    const [product,setProduct] = useState(null);
    const history = useHistory();

    useEffect(() => {
        fetch('http://localhost:1234/products/' + id)
        .then((res) => {
            return res.json()
        }).then(data => {
            setProduct(data)
        })
    }, [id])

    const handleDelete = () => {
        fetch('http://localhost:1234/products/' + id, {
            method: 'DELETE',
        }).then(() => {
            console.log('Deleted !')
            history.push('/products')
        })
    }

    return ( 
        <div>
            <h3>Prodcuts details of { id } </h3>
            <h4>{product && product.name}</h4>
            <h4>{product && product.category}</h4>
            <h4>{product && product.Specs}</h4>
            <h4>{product && product.price}</h4>
            <button onClick={ handleDelete }>Delete</button>
        </div>
     );
}
 
export default Product;