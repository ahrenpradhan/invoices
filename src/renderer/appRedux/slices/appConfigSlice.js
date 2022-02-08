import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scroll: {
    x: 0,
    y: 0,
  },
};

export const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    scroll: (state, action) => {
      let tempData = {};
      const { actionType, data } = action.payload;
      switch (actionType) {
        case 'UPDATE_SCROLL_DATA':
          tempData = { ...data };
          break;
        default:
          // eslint-disable-next-line no-console
          console.log('redux action not defined');
          break;
      }

      state.scroll = {
        ...state.scroll,
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
export const { scroll, decrement, incrementByAmount } = appConfigSlice.actions;

export default appConfigSlice.reducer;
