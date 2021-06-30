import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with path /', () => {
    it('renders the home page', () => {
      const { container } = renderApp({ path: '/' });
      expect(container).toHaveTextContent('home');
    });
  });

  context('with path /works', () => {
    it('renders the works page', () => {
      const { container } = renderApp({ path: '/works' });

      expect(container).toHaveTextContent('works');
    });
  });

  context('with path /shop/items', () => {
    it('renders the shop page', () => {
      const { container } = renderApp({ path: '/shop/items' });

      expect(container).toHaveTextContent('shop');
    });
  });

  context('with path /cart', () => {
    it('renders the cart page', () => {
      const { container } = renderApp({ path: '/cart' });

      expect(container).toHaveTextContent('cart');
    });
  });

  context('with path /login', () => {
    it('renders the  page', () => {
      const { container } = renderApp({ path: '/login' });

      expect(container).toHaveTextContent('login');
    });
  });

  context('with invalid path', () => {
    it('renders the not found page', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent('Not Found');
    });
  });
});
