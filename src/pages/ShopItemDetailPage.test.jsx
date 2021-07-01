import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ShopItemDetailPage from './ShopItemDetailPage';

describe('ShopItemDetailPage', () => {
  it('renders page', () => {
    const { container } = render(
      <MemoryRouter>
        <ShopItemDetailPage />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('상세보기');
  });
});
