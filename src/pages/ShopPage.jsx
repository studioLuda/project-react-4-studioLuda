import { Link } from 'react-router-dom';
import { Title } from '../styles/Page';
import {
  GridContainer, GridItem, ItemTextGroup, ItemTextSpan,
} from '../styles/ShopItemsGride';
import { List, Item } from '../styles/SortOptions';
import shopItems from '../../dummyDatas/shopItems.json';

function SortOptions() {
  return (
    <List>
      <Item>
        <button type="button">등록일순</button>
      </Item>
      <Item>
        <button type="button">인기순</button>
      </Item>
      <Item>
        <button type="button">낮은 가격순</button>
      </Item>
      <Item>
        <button type="button"> 높은 가격순</button>
      </Item>
    </List>
  );
}
function HomePage() {
  const { items } = shopItems;

  return (
    <div>
      <Title> 전체 상품 </Title>
      <SortOptions />
      <GridContainer listStyle="none">
        {items.map((item) => (
          <GridItem key={item.id}>
            <Link to="/shop/items">
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
              <ItemTextGroup>
                <ItemTextSpan fontWeight="bold">
                  {item.realPrice}
                  원
                </ItemTextSpan>

                <ItemTextSpan color="#ccc">
                  (
                  {item.originPrice}
                  원)
                </ItemTextSpan>
                <ItemTextSpan color="#f00" fontWeight="bold">
                  {(item.realPrice / item.originPrice) * 100}
                  % 할인
                </ItemTextSpan>
              </ItemTextGroup>
            </Link>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  );
}

export default HomePage;
