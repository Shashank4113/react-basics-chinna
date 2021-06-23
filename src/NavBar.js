import React, { useState } from 'react';

const NavBar = () => {
   
    const [navlinks] = useState([{nav: 'Home'}, {nav: 'About'}, {nav: 'Contact'},{nav: 'Login'},{nav: 'Register'}]);
   
    return ( 
        <div>
            <ul>
                {navlinks.map(navlink => (
                    <li>{ navlink.nav }</li>
                ))}
            </ul>
        </div>
     );
}
 
export default NavBar;
