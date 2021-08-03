import { Link } from  'react-router-dom';
import React, { useContext } from 'react';
import { BookContext } from '../BookContext';

const NavBar = () => {

    const [books] = useContext(BookContext);

    return ( 
        <div>
            <ul style={{ display: 'inline'}}>
                <Link to="/" style={{ textDecoration: 'None',padding: 10}}><li style={{ display: 'inline'}}>Home</li></Link>
                <Link to="/products" style={{ textDecoration: 'None',padding: 10}}><li style={{ display: 'inline'}}>Products</li></Link>
                <Link to="/addProduct" style={{ textDecoration: 'None',padding: 10}}><li style={{ display: 'inline'}}>Add Product</li></Link>
                <Link to="/signin" style={{ textDecoration: 'None',padding: 10}}><li style={{ display: 'inline'}}>Sign In</li></Link>
                <Link to="/signup" style={{ textDecoration: 'None',padding: 10}}><li style={{ display: 'inline'}}>Sign Up</li></Link>
                <Link to="/contact" style={{ textDecoration: 'None',padding: 10}}><li style={{ display: 'inline'}}>Contact</li></Link>
                <Link to="/bikes" style={{ textDecoration: 'None',padding: 10}}><li style={{ display: 'inline'}}>Bikes</li></Link> 
                <li><p>Available books are : { books && books.length } </p></li>
            </ul>
        </div>
     );
}
 
export default NavBar;