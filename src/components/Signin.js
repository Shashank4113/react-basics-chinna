import React, { useState } from 'react';

const Signin = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({name, password})
    }

    return ( 
        <div>
            <h2>Signin</h2>
            <form onSubmit={handleSubmit}>
                Username<input type="text" onChange={(e) => setName(e.target.value)} /><br />
                Password<input type="password" onChange={(e) => setPassword(e.target.value)} /><br />
                <input type="submit" />
            </form>
        </div>
     );
}
 
export default Signin;