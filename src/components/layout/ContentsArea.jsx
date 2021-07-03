import styled from '@emotion/styled';

const ContentsBox = styled.div({
  backgroundColor: 'pink',
  width: '85%',
  display: 'block',
  padding: '5%',
});

export default function ContentsArea({ className, contents }) {
  return (
    <ContentsBox className={className}>
      {contents}
    </ContentsBox>
  );
}
