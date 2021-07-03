import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ShopItemDetailPage from './ShopItemDetailPage';

describe('ShopItemDetailPage', () => {
  it('renders page', () => {
    const params = { id: 1 };
    const { container } = render(
      <MemoryRouter>
        <ShopItemDetailPage params={params} />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('상세보기');
    expect(container).toHaveTextContent('수량');
    expect(container).toHaveTextContent('장바구니 담기 ');
  });
});
