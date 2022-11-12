import "./App.css";
import { useState } from "react";
import { Book } from "./Book";
import { Shelf } from "./Shelf";
import { get, getAll, update, search } from "./BooksAPI";


function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  const [shelf, setShelf] = useState('none')


  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>

              <Shelf shelfTitle={"Currently Reading"}></Shelf>
              <Shelf shelfTitle={"Want to Read"}></Shelf>
              <Shelf shelfTitle={"Read"}></Shelf>

            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
