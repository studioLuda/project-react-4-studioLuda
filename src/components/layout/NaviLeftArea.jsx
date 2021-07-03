import styled from '@emotion/styled';

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

export default function NaviLeftArea({ title = '-' }) {
  if (title === 'home') {
    return null;
  }
  return (
    <ContentsBox>
      <p>{title}</p>
    </ContentsBox>
  );
}
