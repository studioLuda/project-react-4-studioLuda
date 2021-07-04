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
} = actions;
