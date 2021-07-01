import React, { useState } from 'react';
import Contact from './Contact';
import Products from './Products';

const Home = () => {

    const [name, setName] = useState('HSource');
    const [course, setCourse] = useState('Full Stack');    

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
            <Products title='Amazon Products'/>
            <hr />
            <Contact />
        </div>
     );
}
 
export default Home;