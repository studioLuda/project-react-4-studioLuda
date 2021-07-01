import shopItems from '../../dummyDatas/shopItems.json';

import ShopPageList from './ShopPageList';
import SortOptions from './SortOptions';

export default function ShopContainer() {
  // todo : 여기서 fetch하여 데이터 가져옴
  const { items } = shopItems;

  return (
    <>
      <SortOptions />
      <ShopPageList items={items} />
    </>
  );
}
