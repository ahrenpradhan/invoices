/* eslint-disable no-alert */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  all: {
    fetching: false,
    result: [],
    page: null,
    filter: null,
  },
  create: {
    data: {
      config: null,
      customer: {
        billed: {
          customer: null,
          address: null,
        },
        shipped: {
          customer: null,
          address: null,
        },
      },
      products: [
        {
          id: '1',
          description: '',
          hsn_code: '',
          rate: 0,
          qty: 0,
        },
      ],
      tax: [],
    },
    validation: false,
  },
};

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    createInvoice: (state, action) => {
      let tempData = state.create;
      const { actionType, data } = action.payload;
      switch (actionType) {
        case 'UPDATE_INVOICE_DATA':
          tempData = {
            ...tempData,
            data: {
              ...(tempData.data || {}),
              ...data,
            },
          };
          break;
        case 'ADD_NEW_PRODUCT_TO_LIST':
          tempData = {
            ...tempData,
            data: {
              ...(tempData.data || {}),
              products: [
                ...tempData.data.products,
                {
                  ...initialState.create.data.products[0],
                  // eslint-disable-next-line prefer-template
                  id: tempData.data.products.length + 1 + '',
                },
              ],
            },
          };
          break;
        case 'RESET_INVOICE_DATA':
          tempData = initialState.create;
          break;
        default:
          alert('action is not defined');
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
export const { createInvoice, decrement, incrementByAmount } =
  invoiceSlice.actions;

export default invoiceSlice.reducer;
