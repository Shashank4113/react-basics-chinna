import './Dashboard.css';
import { BookContext } from '../BookContext';
import React, { useContext } from 'react';

const Dashboard = () => {

    // const [books, setBooks] = useContext(BookContext);
    const [books] = useContext(BookContext);

    return ( 
        <div>
            <h2>Dashboard</h2>
            <p>All the available books </p>
            {books && books.map(book => (
                <div key={book.id}>
                    <h3>Book Title</h3>
                    <h4>{ book.name }</h4>
                    <h3>Author</h3>
                    <h4>{ book.author }</h4>
                    <h3>Book Price</h3>
                    <h4>{ book.price }</h4>
                </div>
            ))}
        </div>
     );
}
 
export default Dashboard;