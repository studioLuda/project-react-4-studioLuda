import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import shopItems from '../../dummyDatas/shopItems.json';
import ShopPage from './ShopPage';

describe('ShopPage', () => {
  it('render page', () => {
    const { items } = shopItems;
    const { container } = render(
      <MemoryRouter>
        <ShopPage />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('전체 상품');
    expect(container).toHaveTextContent('등록일순');
    expect(container).toHaveTextContent(items[0].originPrice);
  });
});
