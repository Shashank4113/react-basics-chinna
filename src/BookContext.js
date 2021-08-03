import React, { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = props => {
    const [books, setBooks] = useState([
        {
            name: 'Secret Room',
            author: 'Chethan Bhagat',
            price: '545',
            id: 1
        }
    ]);
    
    return (
        <BookContext.Provider value={[books, setBooks]}>
            { props.children }
        </BookContext.Provider>
    )
}