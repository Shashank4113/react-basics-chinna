import React, { useState } from 'react';
import Products from './Products';

const Home = () => {

    const [name, setName] = useState('HSource');
    const [course, setCourse] = useState('Full Stack');    
    const [products] = useState([
        {name: 'Motorollla E6', category: 'Smart Phones', price: "20000", specs: 'Very handy to use', id:1}, 
        {name: 'Iphone 12 Mini', category: 'Smart Phones', price: "70000", specs: 'Very handy to play', id:2}
    ]);

    const handleClick = () => {
        setCourse('Python')
    }
    
    const handleClick2 = () => {
        setName('Besant');
    }

    return ( 
        <div>
            <h2>Welcome to { name } Technologies</h2>
            <h4>This is our { name } web page</h4>
            <p>Here we are going to teach you the course of { course } and we have very good mentors in { name } !</p>
            <button onMouseLeave={ handleClick }>Click to change the course</button>
            <button onMouseEnter={ handleClick2 }>Click to change the name</button>
            <Products data={ products } title='Amazon Products'/>
        </div>
     );
}
 
export default Home;