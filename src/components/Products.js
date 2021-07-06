import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Products = () => {

    const [items,setItems] = useState(null);

    useEffect(() => {
        fetch('http://localhost:1234/products')
        .then(res => {
            return res.json()
        }).then(data => {
            console.log(data);
            setItems(data);
        })

    },[])

    const handleClick = (id) => {
        console.log(id)
    }

    return ( 
        <div>
            {items && items.map((item) => (
                <div key={item.id}>
                    <Link to={ `/product/${item.id}` }> 
                    <h3>Product name: { item.name }</h3>
                    <h3>Product Category: { item.category }</h3>
                    </Link>
                    <button onClick={ () => handleClick(item.id) }>Details</button>
                    <hr />
                </div>
            ))}
        </div>
     );
}
 
export default Products;