import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortOption: '',
};

const reducers = {
  selectSortOption(state, { payload: sortOption }) {
    return {
      ...state,
      sortOption,
    };
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
} = actions;
