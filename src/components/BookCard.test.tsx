import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import BookCard from './BookCard';

describe('BookCard tests', () => {

    it('should render BookCard component', () => {

        const { container } = render(<BookCard onShelfChange={() => { }}
            bookCard={{
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
            }} />);

        const bookCard = container.getElementsByClassName('book');

        expect(bookCard).toBeDefined();
        expect(screen.getByText(/reactBook/i)).toBeInTheDocument();
        expect(screen.getByText(/andrew angel/i)).toBeInTheDocument();
    });

});