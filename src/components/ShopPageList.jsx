import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const GridContainer = styled.div({
  display: 'grid',
  gridAutoFlow: 'row',
  gridTemplateColumns: 'repeat(auto-fill, minmax(30%, auto))',
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

function ShopPageListItem({ item }) {
  const {
    img, name, realPrice, originPrice,
  } = item;

  return (
    <GridItem>
      <Link to="/shop/items">
        <img src={img} alt={name} />
        <p>{name}</p>
        <ItemTextGroup>
          <ItemTextSpan fontWeight="bold">
            {realPrice}
            원
          </ItemTextSpan>

          <ItemTextSpan color="#ccc">
            (
            {originPrice}
            원)
          </ItemTextSpan>
          <ItemTextSpan color="#f00" fontWeight="bold">
            {(item.realPrice / item.originPrice) * 100}
            % 할인
          </ItemTextSpan>
        </ItemTextGroup>
      </Link>
    </GridItem>
  );
}

export default function ShopPageList({ items }) {
  return (
    <GridContainer listStyle="none">
      {items.map((item) => (
        <ShopPageListItem key={item.id} item={item} />
      ))}
    </GridContainer>
  );
}
