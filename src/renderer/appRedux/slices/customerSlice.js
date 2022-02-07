import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  all: {
    fetching: false,
    result: [],
    page: null,
    result: true,
    filter: null,
  },
  search: {
    fetching: false,
    result: [],
    page: null,
    result: true,
    filter: null,
  },
  create: {
    data: null,
  },
  edit: {
    initial: null,
    current: null,
  },
};

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  customerSlice.actions;

export default customerSlice.reducer;
