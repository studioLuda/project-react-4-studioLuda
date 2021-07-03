import styled from '@emotion/styled';

export default function ImgArea({ shopItem }) {
  const { name, titleImgs } = shopItem;

  const ImgGroup = styled.div({
    display: 'flex',
    width: '300px',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
  });
  const PreviewGroup = styled.ul({
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '1em',
    margin: 0,
    listStyle: 'none',
  });

  const ImgViewer = styled.img({
    width: '300px',
  });
  const Previewer = styled.li({
    marginRight: '0.2em',
    '& a': {
      textDecoration: 'none',
    },
    '& img': {
      '&:hover': {
        border: 'solid',
      },
    },
  });

  return (
    <ImgGroup>
      <ImgViewer src={`${titleImgs[0]}300`} alt={name} />
      <PreviewGroup>
        {titleImgs.map((img) => (
          <Previewer>
            <a href="*">
              <img src={`${img}40`} alt={name} />
            </a>
          </Previewer>
        ))}
      </PreviewGroup>
    </ImgGroup>
  );
}
