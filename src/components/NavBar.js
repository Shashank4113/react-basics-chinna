import { Link } from  'react-router-dom';

const NavBar = () => {
    return ( 
        <div>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/products"><li>Products</li></Link>
                <Link to="/addProduct"><li>Add Product</li></Link>
                <Link to="/signin"><li>Sign In</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </div>
     );
}
 
export default NavBar;