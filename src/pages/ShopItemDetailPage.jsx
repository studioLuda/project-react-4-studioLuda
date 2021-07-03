import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

import Layout from '../components/Layout';
import shopItem from '../../dummyDatas/shopItem.json';
import InfoArea from '../components/ShopItemDetail/InfoArea';
import ImgArea from '../components/ShopItemDetail/ImgArea';

export default function ShopItemDetailPage({ params }) {
  const { id } = params || useParams();
  const HeadGroup = styled.div({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'center',
  });
  const BodyGroup = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '10% 1% 10% 1%',
  });
  return (
    <Layout title="상세보기">
      <HeadGroup>
        <ImgArea shopItem={shopItem} />
        <InfoArea shopItem={shopItem} />
      </HeadGroup>
      <BodyGroup>
        <p>{`상품 아이디 ${id} 디테일 컷`}</p>
        <img src={shopItem.descriptionImg} alt="상품 설명 이미지" />
      </BodyGroup>
    </Layout>
  );
}
