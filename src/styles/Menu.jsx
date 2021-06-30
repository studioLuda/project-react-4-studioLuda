import styled from '@emotion/styled';

const List = styled.ul({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '1em',
  listStyle: 'none',
});
const Item = styled.li({
  marginRight: '1em',
  '& a': {
    color: '#333',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
      fontWeight: 'bold',
    },
  },
});

export { List, Item };
