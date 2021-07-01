import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { Title } from '../styles/Page';
import { List, Item } from '../styles/SortOptions';
import shopItems from '../../dummyDatas/shopItems.json';

const GridContainer = styled.div({
  display: 'grid',
  gridAutoFlow: 'row',
  gridTemplateColumns: 'repeat(auto-fill, minmax(30%, auto))', // 'repeat(3, 1fr)',
  gridGap: '30px 10px',
  alignItems: 'center',
  alignContent: 'space-around',
  '& a': {
    textDecoration: 'none',
  },
});

const GridItem = styled.div({
  placeSelf: 'start center',
  '& p': {
    width: '265px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'block',
    color: '#333',
    textDecoration: 'none',
    textAlign: 'center',
    fontWeight: 'bolder',
  },
});

const ItemTextGroup = styled.div({
  display: 'flex',
  justifyContent: 'space-around',
});

const ItemTextSpan = styled.span(({ color = '#000', fontWeight = 'none' }) => ({
  color,
  fontWeight,
}));

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
export default function ShopPage() {
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
