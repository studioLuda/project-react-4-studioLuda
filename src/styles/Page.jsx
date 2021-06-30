import styled from '@emotion/styled';

const Header = styled.header({
  backgroundColor: '#EEE',
  '& h1': {
    margin: 0,
    padding: '1em .5em',
  },
  '& a': {
    color: '#555',
    textDecoration: 'none',
    '& hover': {
      color: '#000',
    },
  },
});
const Container = styled.div({
  width: '90%',
  margin: '0 auto',
});

const Title = styled.h2({
  fontSize: '2em',
  margin: 0,
  padding: '.4em 0',
});

export { Header, Container, Title };
