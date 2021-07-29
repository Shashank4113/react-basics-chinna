import React, { useState, useEffect } from 'react';

const Bikes = () => {

    const [bikes, setBikes] = useState(null);

    useEffect(() => {
        fetch('http://localhost:1234/bikes')
        .then(res => {
            return res.json()
        }).then(data => {
            setBikes(data);
        })
    },[])

    return ( 
        <div style={{ display: 'flex '}} >
            {bikes && bikes.map(bike => (
                <div key={bike.id} >
                    <img src={ `${process.env.PUBLIC_URL}/assets/images/${bike.url}` } height='300' width='300' alt='Bike 1' />
                    <h4>{ bike.model }</h4>
                </div>
            ))}
        </div>
     );
}
 
export default Bikes;