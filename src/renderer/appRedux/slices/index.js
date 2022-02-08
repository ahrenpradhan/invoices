import appConfigReducer from './appConfigSlice';
import customerReducer from './customerSlice';
import invoiceReducer from './invoiceSlice';
import productReducer from './productSlice';

const rootReducer = {
  appConfig: appConfigReducer,
  customer: customerReducer,
  invoice: invoiceReducer,
  product: productReducer,
};

export default rootReducer;
