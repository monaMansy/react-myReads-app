import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import HomePage from './HomePage';

describe('HomePage', () => {

    it('should render HomePage component', () => {

        const { container } = render(<HomePage />, { wrapper: BrowserRouter });

        const titleHeader = container.getElementsByClassName('list-books-title');
        const listBooksDiv = container.getElementsByClassName('list-books-content');

        expect(titleHeader).toBeDefined();
        expect(listBooksDiv).toBeDefined();
    });

});