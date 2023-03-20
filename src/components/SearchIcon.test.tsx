import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchIcon from './SearchIcon';
import '@testing-library/jest-dom';
import React from 'react';

describe('Open Search div to be rendered', () => {

    it('should render OpenSearch component', () => {
        const { container } = render(<SearchIcon />, { wrapper: BrowserRouter });
        const searchDiv = container.getElementsByClassName('open-search');

        expect(screen.getByText(/Add a book/i)).toBeInTheDocument()
        expect(searchDiv).toBeDefined();
    });

});