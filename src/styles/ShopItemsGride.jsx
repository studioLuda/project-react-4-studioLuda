import styled from '@emotion/styled';

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
export {
  GridContainer, GridItem, ItemTextGroup, ItemTextSpan,
};
