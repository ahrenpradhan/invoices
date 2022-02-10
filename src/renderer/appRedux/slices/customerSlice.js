import { createSlice } from '@reduxjs/toolkit';
import { customerHelper } from 'renderer/utils/helper';

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
    validation: false,
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
              ...data.data,
            },
            validation: data.validation,
          };
          break;
        case 'CREATE_CUSTOMER_DATA':
          window.api.send('db:operation', 'db:create', 'insert', 'customers', {
            data: customerHelper(
              'GET_CUSTOMER_DATA',
              state?.create?.validation ? state?.create?.data : false
            ),
          });
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
    allCustomer: (state, action) => {
      let tempData = {};
      const { actionType, data } = action.payload;
      switch (actionType) {
        case 'FETCH_CUSTOMER_DETAILS':
          tempData = {
            result: [...(state?.all?.result || []), ...data.result],
            page: data.page || 1,
            filter: null,
          };
          break;
        case 'RESET_CUSTOMER':
          tempData = {
            ...initialState.all,
          };
          break;
        default:
          // eslint-disable-next-line no-console
          console.log('redux action not defined');
          break;
      }
      state.all = {
        ...state.all,
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
export const { createCustomer, allCustomer, decrement, incrementByAmount } =
  customerSlice.actions;

export default customerSlice.reducer;
