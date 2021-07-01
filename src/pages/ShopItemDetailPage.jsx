import { useParams } from 'react-router-dom';

export default function ShopItemDetailPage({ params }) {
  const { id } = params || useParams();

  return <p>{`상품아이디 ${id} 상세보기 페이지`}</p>;
}
