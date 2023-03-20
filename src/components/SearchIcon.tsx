import { Link } from "react-router-dom";
import React from 'react';

const SearchIcon = () => {
    return (
        <div className="open-search">
            <Link to="/search">Add a book</Link>
        </div>
    )
}

export default SearchIcon;