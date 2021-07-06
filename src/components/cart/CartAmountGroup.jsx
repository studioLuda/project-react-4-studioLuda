import styled from '@emotion/styled';

import { currencyFomater } from '../../util/commonUtils';

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

function getSum(numbers) {
  const sum = numbers.reduce((x, y) => x + y, 0);
  return sum;
}
function getPrices(mCart) {
  return mCart.map((item) => item.realPrice * item.itemAmount);
}
export default function CartAmountGroup({ cart }) {
  const sumPrices = getSum(getPrices(cart));
  const deliveryFee = sumPrices > 30000 ? 0 : 3000;

  return (
    <div>
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
    </div>
  );
}
