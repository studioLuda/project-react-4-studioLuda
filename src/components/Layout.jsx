import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Header } from '../styles/Page';
import MenuBar from './MenuBar';

function HeaderArea() {
  return (
    <Header>
      <h1>
        <Link to="/">STUDIO XX</Link>
      </h1>
      <MenuBar />
    </Header>
  );
}

function SubMenu({ title = '-', className }) {
  if (title === 'home') { return null; }
  return (
    <div className={className}>
      <p>{title}</p>
    </div>
  );
}

function ContentsArea({ className, contents }) {
  return <div className={className}>{contents}</div>;
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

const BodyArea = styled.main`
  /* max-width: 1080px; */
  min-width : 500px;
  display: inline-block;
  background-color: pink;
  margin: auto;
  display: grid;
  grid-template-columns: 20vw auto; /* 각 행(세로줄)의 길이 */
  grid-template-rows: 80vh; /* 각 열(가로줄)의 길이 */
  gap: 10px; /* 자식요소간의 간격 */
`;

const NaviLeftArea = styled(SubMenu)({

  backgroundColor: '#A3C',
});

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
