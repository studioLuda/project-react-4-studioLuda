import styled from '@emotion/styled';
import Layout from '../components/layout/Layout';

import { loadObjItem } from '../services/storage';
import { currencyFomater } from '../util/commonUtils';

const Table = styled.table`
min-width:700px;
margin-top: 40px;
position: relative;
`;
const Thead = styled.thead({
  backgroundColor: '#ccc',
  height: '40px',
  fontWeight: 'bold',
  fontSize: '17px',
});
const Tbody = styled.tbody`
text-align: center;
padding: 10px 0;
height: 20px;
font-size: 14px;
`;

function ItemRow({ item }) {
  const Item = styled.tr({
    // backgroundColor: 'ivory',
    height: '100px',
    marginTop: '10px',
    display: 'flow',
    '& div': {
      // backgroundColor: 'red',
      maxWidth: '500px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      '& img': {
        margin: '10px',
        width: '70px',
      },
      '& p': {
        width: '300px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: 'block',
        color: '#333',
        textDecoration: 'none',
        textAlign: 'center',
        fontWeight: 'bolder',
      },
    },
  });

  const {
    id, name, img, itemAmount, realPrice,
  } = item;
  return (
    <Item>
      <td><input type="checkbox" name={id} value={id} /></td>
      <td>
        <div>
          <img src={img} alt={name} />
          <p>{name}</p>
        </div>
      </td>
      <td>
        {itemAmount}
        개
      </td>
      <td>
        {currencyFomater({ number: realPrice })}
      </td>
    </Item>
  );
}
const AmountBoxGruop = styled.div({
  width: '700px',
  display: 'flex',
  direction: 'row',
  justifyContent: 'space-around',
  marginTop: '40px',
  // backgroundColor: 'palegreen',
});
const AmountBox = styled.div({
  maxWidth: '100px',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  // backgroundColor: 'orange',
  '& p': {
    fontsize: '2em',
  },
  '& span': {
    fontWeight: 'bolder',
    fontsize: '1em',
  },
});
const Button = styled.button({
  align: 'center',
  backgroundColor: 'tomato',
  color: 'white',
  fontWeight: 'bold',
  marginTop: '60px',
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  width: '50%',
  border: 'none',
  borderRadius: '4px',
});
const Notice = styled.p({
  color: '#C14',
});

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

function getSum(numbers) {
  const sum = numbers.reduce((x, y) => x + y, 0);
  return sum;
}
function getPrices(mCart) {
  return mCart.map((item) => item.realPrice * item.itemAmount);
}
export default function CartPage() {
  const cart = loadObjItem('cart');
  if (!cart) {
    return (
      <Layout title="Cart">
        <Container>
          <Notice>장바구니가 비었어요!</Notice>
        </Container>
      </Layout>
    );
  }

  const sumPrices = getSum(getPrices(cart));
  const deliveryFee = sumPrices > 30000 ? 0 : 3000;
  return (
    <Layout title="Cart">
      <Container>
        <Table>
          <Thead>
            <tr>
              <th>
                <input type="checkbox" name="checkAll" value="checkAll" />
              </th>
              <th>상품정보</th>
              <th>수량</th>
              <th>상품 금액</th>
            </tr>
          </Thead>
          <Tbody>
            {cart.map((item) => (
              <ItemRow item={item} key={item.id} />
            ))}
          </Tbody>
        </Table>

        <AmountBoxGruop>
          <AmountBox>
            <p>총 상품 금액</p>
            <span>{currencyFomater({ number: sumPrices })}</span>
          </AmountBox>
          <AmountBox>
            <p> 배송비 </p>
            <span>{currencyFomater({ number: deliveryFee })}</span>
          </AmountBox>
          <AmountBox>
            <p> 총 주문금액</p>
            <span>{currencyFomater({ number: sumPrices + deliveryFee })}</span>
          </AmountBox>
        </AmountBoxGruop>
        <Button type="button"> 주문하기</Button>
        <Notice> 30,000원 이하의 주문에는 배송비 3,000원이 추가됩니다.</Notice>
      </Container>
    </Layout>
  );
}
