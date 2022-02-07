import customerReducer from './customerSlice';
import invoiceReducer from './invoiceSlice';
import productReducer from './productSlice';

const rootReducer = {
  customer: customerReducer,
  invoice: invoiceReducer,
  product: productReducer,
};

export default rootReducer;
