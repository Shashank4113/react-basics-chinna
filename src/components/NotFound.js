import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div>
            <h3>404 Page Error</h3>
            <p>That page cannot be found.</p>
            <Link to="/">Please visit our website</Link>
        </div>
     );
}
 
export default NotFound;