import { Book } from "./Book"
export function Shelf({ shelfTitle }) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <Book />
                </ol>
            </div>
        </div>
    )
}