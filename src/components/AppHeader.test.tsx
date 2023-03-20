import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AppHeader from './AppHeader';

describe('Header tests', () => {

    it('should render Header component', () => {
        const { container } = render(<AppHeader />);
        const ListBooksTitle = container.getElementsByClassName('list-books-title');

        expect(ListBooksTitle).toBeDefined();
        expect(screen.getByText(/ReactApp-MyReads/i)).toBeInTheDocument();
    });

});