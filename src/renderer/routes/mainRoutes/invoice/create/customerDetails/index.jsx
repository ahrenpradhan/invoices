/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { searchCustomer } from 'renderer/appRedux/slices/customerSlice';
import { createInvoice } from 'renderer/appRedux/slices/invoiceSlice';
import { addressToText } from 'renderer/utils/helper';

import CustomCustomerSelect from './CustomCustomerSelect';
import CustomCustomerAddress from './CustomCustomerAddress';

const CustomerDetails = ({ formConfig, currentValues }) => {
  const dispatch = useDispatch();
  const customerReduxState = useSelector((_) => _.customer.search);
  const invoiceReduxState = useSelector((_) => _.invoice.create);
  const getCustomers = () => {
    window.api.receiveOnce('db:get', (_data) => {
      if (_data.status && Array.isArray(_data?.data?.result)) {
        dispatch(
          searchCustomer({
            actionType: 'GET_CUSTOMER',
            data: {
              result: _data.data.result,
              page: 1,
            },
          })
        );
      }
    });
    window.api.send('db:operation', 'db:get', 'find', 'customers', {
      params: {},
    });
  };
  const handleUpdate = (action, data) => {
    switch (action) {
      case 'UPDATE_CUSTOMER_LOCAL':
        dispatch(
          createInvoice({
            actionType: 'UPDATE_INVOICE_DATA',
            data: { customer: data },
          })
        );
        break;
      default:
        alert('action not defined');
        break;
    }
  };
  useEffect(() => {
    getCustomers();
    return () => {
      dispatch(
        searchCustomer({
          actionType: 'RESET_CUSTOMER',
        })
      );
    };
  }, []);
  return (
    <>
      {/* Billed Customer */}
      <CustomCustomerSelect
        title="Billed To"
        formItemLayout={formConfig?.formItemLayout}
        customerReduxState={customerReduxState}
        currentData={invoiceReduxState?.data?.customer?.billed}
        handleUpdate={(_data) => {
          const billingTemp = {
            billed: {
              ...invoiceReduxState?.data?.customer?.billed,
              customer: _data,
              address: addressToText(_data.billingAddress),
            },
          };
          let shippedTemp = false;
          if (!invoiceReduxState?.data?.customer?.shipped?.customer) {
            shippedTemp = {
              shipped: {
                customer: _data,
                address: addressToText(_data.shippingAddress),
              },
            };
          }
          handleUpdate('UPDATE_CUSTOMER_LOCAL', {
            ...invoiceReduxState?.data?.customer,
            ...billingTemp,
            ...(shippedTemp || {}),
          });
        }}
      />
      {/* Shipped Customer */}
      <CustomCustomerSelect
        title="Shipped To"
        formItemLayout={formConfig?.formItemLayout}
        customerReduxState={customerReduxState}
        currentData={invoiceReduxState?.data?.customer?.shipped}
        handleUpdate={(_data) => {
          const shippedTemp = {
            shipped: {
              customer: _data,
              address: addressToText(_data.shippingAddress),
            },
          };
          handleUpdate('UPDATE_CUSTOMER_LOCAL', {
            ...invoiceReduxState?.data?.customer,
            ...shippedTemp,
          });
        }}
      />
      {/* Billed Customer */}
      {invoiceReduxState?.data?.customer?.billed?.customer &&
        invoiceReduxState?.data?.customer?.billed?.customer && (
          <>
            <CustomCustomerAddress
              title="Billing Address"
              formItemLayout={formConfig?.formItemLayout}
              // customerReduxState={customerReduxState}
              currentData={invoiceReduxState?.data?.customer?.billed}
              handleUpdate={() => {}}
              disabled
            />
            {/* Shipped Customer */}
            <CustomCustomerAddress
              title="Shipping Address"
              formItemLayout={formConfig?.formItemLayout}
              // customerReduxState={customerReduxState}
              currentData={invoiceReduxState?.data?.customer?.shipped}
              handleUpdate={(_data) => {
                const shipped = {
                  ...invoiceReduxState?.data?.customer?.billed,
                  address: _data,
                };
                handleUpdate('UPDATE_CUSTOMER_LOCAL', {
                  ...invoiceReduxState?.data?.customer,
                  shipped,
                });
              }}
            />
          </>
        )}
    </>
  );
};
CustomerDetails.defaultProps = {
  formConfig: false,
  currentValues: false,
};
CustomerDetails.propTypes = {
  formConfig: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.bool,
    PropTypes.node,
  ]),
  currentValues: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.bool,
  ]),
};

export default CustomerDetails;
