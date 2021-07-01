import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ShopPageListItem from './ShopPageListItem';

describe('ShopPageListItem', () => {
  it('renders item infos', () => {
    const item = {
      id: 1,
      name: '자석 마스크걸이',
      originPrice: 2000,
      realPrice: 1000,
      img: 'https://test.com/img.jpg',
    };

    const { container } = render(
      <MemoryRouter>
        <ShopPageListItem item={item} />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('자석 마스크걸이');
    expect(container).toHaveTextContent('1,000 원');
    expect(container).toHaveTextContent('2,000 원');
    expect(container).toHaveTextContent('50% 할인');
  });
});
