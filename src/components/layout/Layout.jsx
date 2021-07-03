import styled from '@emotion/styled';

import HeaderArea from './HeaderArea';
import FooterArea from './FooterArea';
import NaviLeftArea from './NaviLeftArea';
import ContentsArea from './ContentsArea';

const BodyArea = styled.main({
  minWidth: '500px',
  display: 'flex',
  flexDerection: 'row',
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
