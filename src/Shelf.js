import { useState, useEffect } from "react";
import { Book } from "./Book"
import * as BooksAPI from "./BooksAPI";

export function Shelf({ shelfTitle, shelfProperty }) {

    const [books, setBooks] = useState([])

    useEffect(() => {
        const getBooks = async () => {
            const res = await BooksAPI.getAll();
            setBooks(res);
        };
        getBooks();
    }, [])


    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books
                            .filter((book) => book.shelf === shelfProperty)
                            .map((book, id) => <li key={id}><Book book={book} /></li>)
                    }
                </ol>
            </div>
        </div>
    )
}