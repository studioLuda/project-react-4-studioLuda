import Layout from '../components/Layout';
import { Title } from '../styles/Page';
import ShopContainer from '../components/ShopContainer';

// FIXME : Layout적용시, 전체상품 페이지가 Footer를 넘어가는 현상 해결하기.

export default function ShopPage() {
  return (
    <Layout title="Shop">
      <Title> 전체 상품 </Title>
      <ShopContainer />
    </Layout>
  );
}
