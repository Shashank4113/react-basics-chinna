import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Add = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [specs, setSpecs] = useState('');   
    const history = useHistory(); 

    const handle = (e) => {
        e.preventDefault();
        const data = {name, price, category, specs}

        fetch('http://localhost:1234/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(() => {
            console.log('New product added successfully !!');
            history.push('/signin');
        })
    }

    return ( 
        <div>
            <h2>New Product Details</h2>
            <form onSubmit={ handle }>
                Product Name<input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
                Price<input type="text" value={price} onChange={(e) => setPrice(e.target.value)} /><br />
                Category<input type="text" value={category} onChange={(e) => setCategory(e.target.value)} /><br />
                Specifications<input type="text" value={specs} onChange={(e) => setSpecs(e.target.value)} /><br />
                <input type="submit" />
            </form>
        </div>
     );
}
 
export default Add;