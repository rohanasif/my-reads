import { useState, useEffect } from "react";
import { Book } from "./Book"
import { getAll } from "./BooksAPI";

export function Shelf({ shelfTitle }) {

    const [shelf, setShelf] = useState([])
    const [books, setBooks] = useState([])

    useEffect(() => {
        setBooks(getAll())
    }, [])
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => {
                        <li><Book /></li>
                    })}
                </ol>
            </div>
        </div>
    )
}