import { render, screen } from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App tests', () => {

  it('should contains the app Div', () => {
    const { container } = render(<App />, { wrapper: BrowserRouter });
    const appDiv = container.getElementsByClassName('app');
    expect(container).toBeTruthy();
    expect(appDiv).toBeDefined();
  });

  it('should show the HomePage', () => {

    const currentRoute = '/';

    const { container } = render(
      <MemoryRouter initialEntries={[currentRoute]}>
        <App />
      </MemoryRouter>,
    );

    const homePageMainDiv = container.getElementsByClassName('list-books');
    expect(homePageMainDiv).toBeDefined();
  });

  it('should show the SearchPage', () => {

    const currentRoute = '/search';

    const { container } = render(
      <MemoryRouter initialEntries={[currentRoute]}>
        <App />
      </MemoryRouter>,
    );

    const searchPageMainDiv = container.getElementsByClassName('search-books');
    
    expect(searchPageMainDiv).toBeDefined();
    expect(screen.getAllByPlaceholderText(/Search by title, author, or ISBN/i)).toBeTruthy();
  });

});