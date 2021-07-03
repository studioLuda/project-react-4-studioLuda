import styled from '@emotion/styled';

const Footer = styled.footer({
  backgroundColor: '#BBB',
  margin: 0,
  padding: '1em .5em',
});

export default function FooterArea() {
  return (
    <Footer>
      <p> 회사명 , 연락처, copyright 등</p>
    </Footer>
  );
}
