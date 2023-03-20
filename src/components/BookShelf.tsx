
import { BookCardModel } from "../models/my-reads-app.model";
import BookCard from "./BookCard";
import React from 'react';

/** BooksShelfProps */
 interface BooksShelfProps {
    shelfTitle: string;
    shelfBooks: BookCardModel[];
     emitShelfChange: (bookId: string, newShelf: string) => void;
 }

const BooksShelf = (props: BooksShelfProps) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">

                    {props.shelfBooks.map((book) => <BookCard key={book.id} bookCard={book} onShelfChange={(book, newShelf) => {props.emitShelfChange(book.id, newShelf)}}/>)}

                </ol>
            </div>
        </div>

    );
}

export default BooksShelf;