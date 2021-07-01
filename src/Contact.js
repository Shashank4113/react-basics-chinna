import React, { useEffect, useState } from 'react';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = [name, email];
        console.log(obj);
    }

    useEffect(() => {
        console.log('Hello')
    }, []);

    return ( 
        <div>
            <form onSubmit={ handleSubmit }>
                Username <input type="text" onChange={(e) => setName(e.target.value)}/>
                Email <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="submit" value="Contact" />
            </form>
        </div>
     );
}
 
export default Contact;