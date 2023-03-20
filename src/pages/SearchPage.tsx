import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import * as BooksAPI from "../BooksAPI";
import BookCard from "../components/BookCard";
import ShelfTypes from "../models/enums/shelfType.enum";
import { BookCardModel } from "../models/my-reads-app.model";

const SearchPage = () => {

  const [searchResult, setSearchResult] = useState<(BookCardModel | never)[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [myBooks, setMyBooks] = useState<(BookCardModel | never)[]>([]);

  useEffect(() => {
    const getAllBooks = async () => {
        const res = await BooksAPI.getAll();
        setMyBooks(res);
    };

    const mapSearchResultShelfs = (result: BookCardModel[]) => {
      return result && result.length && (result.map((book) => {
        const usedBook = myBooks.find((b) => b.id === book.id);
        book.shelf = usedBook && usedBook.shelf ? usedBook.shelf : ShelfTypes.NONE;

        return book;
      }))
    }

    getAllBooks();

    const searchForBooks = async (query: string, maxResult: number) => {
      const res = await BooksAPI.search(query, maxResult);
      const checkedResponse = Array.isArray(res) ? res : res.items;
      const mappedSearchResult = mapSearchResultShelfs(checkedResponse) || [];
      setSearchResult(mappedSearchResult);
    };

    searchQuery ? searchForBooks(searchQuery, 100) : setSearchResult([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const updateMyBooksShelf = (updatedBook: BookCardModel, newShelf: string) => {
    myBooks.find((b) => b.id === updatedBook.id) ?
      myBooks.filter((b) => b.id === updatedBook.id)[0].shelf = newShelf :
      myBooks.push(updatedBook);
    setMyBooks(myBooks);
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link
          className="close-search"
          to="/"
        >
          Close
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

      </div>
      <div className="search-books-results">

        <ol className="books-grid">

          {searchResult.length > 0 && searchResult.map((book) => <BookCard key={book.id} bookCard={book} onShelfChange={(updatedBook, newShelf) => { updateMyBooksShelf(updatedBook, newShelf) }} />)}

        </ol>

      </div>
    </div>
  );
}

export default SearchPage;