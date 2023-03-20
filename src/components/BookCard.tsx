import * as BooksAPI from "../BooksAPI";
import { BookCardModel, ShelvesModel } from "../models/my-reads-app.model";
//import React from 'react';
import ShelfTypes from "../models/enums/shelfType.enum";
import { useState } from "react";

interface BookCardProps {
    bookCard: BookCardModel;
    onShelfChange: (book: BookCardModel, newShelf: string) => void;
 }
 const BookCard = (props: BookCardProps) => {
    
     /** Dunmmy state for component reloading purpose */
     const [, setMode] = useState("initial");

    /** Available shelves options */
    const shelves: ShelvesModel[] = [{ shelfName: '', shelfDisplayName: "Move to..." },
    { shelfName: ShelfTypes.CURRENTLY_READING, shelfDisplayName: "Currently Reading" },
    { shelfName: ShelfTypes.WANT_TO_READ, shelfDisplayName: "Want to Read" },
    { shelfName: ShelfTypes.READ, shelfDisplayName: "Read" },
    { shelfName: ShelfTypes.NONE, shelfDisplayName: "None" },
    ];

    const changeShelf = async (book: BookCardModel, newShelf: string): Promise<void> => {
        await BooksAPI.update(book, newShelf);
        setMode("reload");
        props.onShelfChange(book, newShelf);
    };

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 140,
                            height: 170,
                            backgroundImage: `url(${props.bookCard?.imageLinks?.thumbnail})`,
                        }}
                    ></div>
                    <div className="book-shelf-changer">
                        <select value={props.bookCard.shelf} onChange={(e) => { changeShelf(props.bookCard, e.target.value) }}>
                            {shelves.map((shelve, index) => <option key={index} value={shelve.shelfName} disabled={index === 0}>{shelve.shelfDisplayName}</option>)}
                        </select>
                    </div>
                </div>

                <div className="book-title">{props.bookCard.title}</div>

                {props.bookCard.authors && props.bookCard.authors.length > 0 && props.bookCard.authors.map((author, i) => <div key={"author" + i} className="book-authors">{author}</div>)}

            </div>
        </li>
    );
}

export default BookCard;