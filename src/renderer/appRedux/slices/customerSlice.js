import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  all: {
    fetching: false,
    result: [],
    page: null,
    filter: null,
  },
  search: {
    fetching: false,
    result: [],
    page: null,
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
    createCustomer: (state, action) => {
      let tempData = {};
      const { actionType, data } = action.payload;
      switch (actionType) {
        case 'UPDATE_CUSTOMER_DATA':
          tempData = {
            data: {
              ...(state?.create?.data || {}),
              ...data,
            },
          };
          break;
        case 'RESET_CUSTOMER_DATA':
          tempData = {
            data: false,
          };
          break;
        default:
          // eslint-disable-next-line no-console
          console.log('redux action not defined');
          break;
      }
      state.create = {
        ...state.create,
        ...tempData,
      };
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
export const { createCustomer, decrement, incrementByAmount } =
  customerSlice.actions;

export default customerSlice.reducer;
