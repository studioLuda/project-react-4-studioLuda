import { useDispatch } from 'react-redux';

import { changeCartItemCheked, removeSelectedCartIem } from '../../redux/slice';
import CartItemTable from './CartItemsTable';
import CartAmountGroup from './CartAmountGroup';
import { Container } from '../../styles/CartPageStyle';

export default function CartContainer({ cart }) {
  const dispatch = useDispatch();

  function onChangeCheckBox(event) {
    const {
      target: { value: itemId, checked },
    } = event;
    dispatch(changeCartItemCheked({ itemId, checked, cart }));
  }

  function onClickDeleteButton() {
    dispatch(removeSelectedCartIem(cart));
  }

  return (
    <Container>
      <CartItemTable
        cart={cart}
        onClickDeleteButton={onClickDeleteButton}
        onChangeCheckBox={onChangeCheckBox}
      />
      <CartAmountGroup cart={cart} />
    </Container>
  );
}
