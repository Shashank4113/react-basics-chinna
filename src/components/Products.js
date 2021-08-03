import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Products = () => {

    const [items,setItems] = useState(null);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:1111/products')
        .then(res => {
            return res.json()
        }).then(data => {
            setItems(data);
            setIsLoading(false);
        })
    },[])

    return ( 
        <div>
            { isLoading && <h3>Loading ....</h3> }
            {items && items.map((item) => (
                <div key={item.id}>
                    <Link to={ `/product/${item.id}` }> 
                    <h3>Product name: { item.name }</h3>
                    <h3>Product Category: { item.category }</h3>
                    </Link>
                    <hr />
                </div>
            ))}
        </div>
     );
}
 
export default Products;