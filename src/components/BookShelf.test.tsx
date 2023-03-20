import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import BooksShelf from './BookShelf';

describe('BooksShelf tests', () => {

    it('should render BooksShelf component with one book', () => {

        const { container } = render(<BooksShelf emitShelfChange={() => { }}
        shelfBooks={[{
            title: 'reactBook',
            authors: [
                'andrew angel',
                'oliver mathlon'
            ],
            imageLinks: {
                'smallThumbnail': 'http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
                'thumbnail': 'http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
            },
            id: 'evuwdDLfAyYC',
            shelf: 'wantToRead'
        },{
            title: 'learn IOT',
            authors: [
                'yan david',
                'oliver mathlon'
            ],
            imageLinks: {
                'smallThumbnail': 'http://books.google.com/books/content?id=evuwdDLfAy00&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
                'thumbnail': 'http://books.google.com/books/content?id=evuwdDLfAy00&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
            },
            id: 'evuwdDLfAy00',
            shelf: 'wantToRead'
        }]} shelfTitle={"want to read"} />);

        const mainDiv = container.getElementsByClassName('bookshelf-title');
        const bookCards = container.getElementsByClassName('book');

        expect(mainDiv).toBeDefined();
        expect(bookCards).toBeDefined();
        expect(bookCards.length).toEqual(2);
        expect(screen.getByText(/learn IOT/i)).toBeInTheDocument();
    });

});