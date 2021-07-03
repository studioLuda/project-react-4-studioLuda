import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import MenuBar from './MenuBar';

function HeaderArea() {
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
  return (
    <Header>
      <h1>
        <Link to="/">STUDIO XX</Link>
      </h1>
      <MenuBar />
    </Header>
  );
}

const BodyArea = styled.main({
  minWidth: '500px',
  display: 'flex',
  flexDerection: 'row',
});

function NaviLeftArea({ title = '-', className }) {
  const ContentsBox = styled.div({
    backgroundColor: '#A3C',
    width: '15%',
    position: 'sticky',
    display: 'block',
    '& p': {
      fontSize: '2em',
      margin: '0.5em 0 0 1em',
    },
  });
  if (title === 'home') {
    return null;
  }
  return (
    <ContentsBox className={className}>
      <p>{title}</p>
    </ContentsBox>
  );
}

function ContentsArea({ className, contents }) {
  const ContentsBox = styled.div({
    backgroundColor: 'pink',
    width: '85%',
    display: 'block',
    padding: '5%',
  });
  return <ContentsBox className={className}>{contents}</ContentsBox>;
}

function FooterArea() {
  const Footer = styled.footer({
    backgroundColor: '#BBB',
    margin: 0,
    padding: '1em .5em',
  });
  return (
    <Footer>
      <p> 회사명 , 연락처, copyright 등</p>
    </Footer>
  );
}

export default function Layout({ title = '페이지 제목', className, children }) {
  return (
    <>
      <HeaderArea />
      <BodyArea>
        <NaviLeftArea title={title} />
        <ContentsArea className={className} contents={children} />
      </BodyArea>
      <FooterArea />
    </>
  );
}
