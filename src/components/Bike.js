import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const Bike = () => {

    const { id } = useParams();
    const [bike, setBike] = useState(null);

    useEffect(() => {
        fetch('http://localhost:2222/bikes/' + id)
        .then((res) => {
            return res.json()
        }).then(data => {
            setBike(data)
        })
    }, [id])

    return ( 
        <div>
            <h3>Bike details of { id } </h3>
            { bike && <img src={ `${process.env.PUBLIC_URL}/assets/images/${bike.url}` } height='150' width='150' alt='Bike 1' />}
            <h4>{bike && bike.chasisno}</h4>
            <h4>{bike && bike.model}</h4>
            <h4>{bike && bike.price}</h4>
        </div>
     );
}
 
export default Bike;