import React, { useState } from 'react';

const Signup = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return ( 
        <div>
            Username<input type="text" onChange={(e) => setName(e.target.value)} /><br />
            Email<input type="email" onChange={(e) => setEmail(e.target.value)} /><br />
            Password<input type="password" onChange={(e) => setPassword(e.target.value)} /><br />
            <input type="submit" />
        </div>
     );
}
 
export default Signup;
