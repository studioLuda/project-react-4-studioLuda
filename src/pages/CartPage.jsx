import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';

import CartContainer from '../components/cart/CartContainer';
import Layout from '../components/layout/Layout';
import { get } from '../util/commonUtils';
import { synchonizeCart } from '../redux/slice';

const Notice = styled.p({
  color: '#C14',
});

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export default function CartPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(synchonizeCart());
  }, []);

  const cart = useSelector(get('cart'));

  if (!cart) {
    return (
      <Layout title="Cart">
        <Container>
          <Notice>장바구니가 비었어요!</Notice>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout title="Cart">
      <CartContainer cart={cart} />
    </Layout>
  );
}
