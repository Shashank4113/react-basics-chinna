import React, { createContext, useEffect, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = props => {

    const [books, setBooks] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4444/books')
        .then(res => {
            return res.json()
        }).then(data => {
            setBooks(data);
            console.log(data);
        })
    },[])
    
    return (
        <BookContext.Provider value={[books, setBooks]}>
            { props.children }
        </BookContext.Provider>
    )
}