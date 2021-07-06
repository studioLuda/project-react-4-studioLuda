import { createSlice } from '@reduxjs/toolkit';

import {
  saveObjItem,
  loadObjItem,
} from '../services/storage';

const initialState = {
  sortOption: '',
  itemAmount: 1,
  cart: [],
};

const reducers = {
  selectSortOption(state, { payload: sortOption }) {
    return {
      ...state,
      sortOption,
    };
  },
  changeItemAmountField(state, { payload: itemAmount = 1 }) {
    return {
      ...state,
      itemAmount,
    };
  },
  synchonizeCart(state) {
    const cart = loadObjItem('cart') || [];
    return {
      ...state,
      cart,
    };
  },
  changeCartItemCheked(state, { payload: { itemId, checked, cart } }) {
    console.log('slice확인:', cart); // 현재 컴포넌트에 업데이트된 cart 값 (로컬스토리지에서 불러옴)
    console.log('state확인:', state.cart); // -> 없음 cart가 store 업데이트 되지않음.
    // FIXME! 일단 커밋하고, 리팩토링 하기 => 부모 컴포넌트에서 cart값 불러오고,
    // 자식 컴포넌트에서 변경하는 로직 구현해볼 예정.
    // 왜 이런 현상이 생기는지 잘 모르겠음. 질문하기.

    console.log('itemId', itemId);
    console.log('cheked', checked);

    const index = cart.findIndex((item) => item.id === Number(itemId));
    if (index > -1) {
      const updatedItem = {
        ...cart[index],
        checked,
      };
      const updatedCart = [...cart];
      updatedCart[index] = updatedItem;

      return {
        ...state,
        cart: updatedCart,
      };
    }
    return state;
  },
  removeSelectedCartIem(state, { payload: cart }) {
    console.log('slice확인:', cart);
    console.log('state확인:', state.cart);

    const updatedCart = [...cart].filter((e) => !e.checked);
    saveObjItem('cart', updatedCart);
    return {
      ...state,
      cart: updatedCart,
    };
  },
  addItemToCart(state, { payload: shopItem }) {
    const { id } = shopItem;
    const { itemAmount } = state;
    const oldCart = loadObjItem('cart') || [];

    const index = oldCart.findIndex((item) => item.id === id);
    if (index === -1) {
      // 장바구니에 현재 선택한 아이템이 없다면,
      const cart = [...oldCart, { ...shopItem, itemAmount }];
      saveObjItem('cart', cart);
      return {
        ...state,
        cart,
      };
    }
    // 이미 장바구니에 아이템있다면, 수량을 현재 값 만큼 추가해주기.
    const { itemAmount: oldAmount } = oldCart[index];
    const updatedItem = {
      ...oldCart[index],
      itemAmount: oldAmount + itemAmount,
    };
    const cart = [...oldCart];
    cart[index] = updatedItem;

    saveObjItem('cart', cart);
    return {
      ...state,
      cart,
    };
    // todo : 중복제거 리팩토링 할 것.
    // todo : 로그인 할 경우, user의 장바구니를 서버에 저장할 것인지 고민
  },
};

const { actions, reducer } = createSlice({
  name: 'application',
  initialState,
  reducers,
});

export default reducer;
export const {
  selectSortOption,
  changeItemAmountField,
  addItemToCart,
  synchonizeCart,
  changeCartItemCheked,
  removeSelectedCartIem,
} = actions;
