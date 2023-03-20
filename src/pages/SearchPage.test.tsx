import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import SearchPage from './SearchPage';

describe('SearchPage', () => {

    it('should render SearchPage component', () => {

        const { container } = render(<SearchPage />, { wrapper: BrowserRouter });
        const searchBooksDiv = container.getElementsByClassName('search-books');
        const searchInput = container.getElementsByTagName('input');

        expect(searchBooksDiv).toBeDefined();
        expect(searchInput).toBeDefined();
        expect(screen.getByText(/close/i)).toBeInTheDocument();

    });

});