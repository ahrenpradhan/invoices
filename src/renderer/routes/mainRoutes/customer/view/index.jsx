/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allCustomer } from 'renderer/appRedux/slices/customerSlice';
import TableList from 'renderer/components/tableList';

const ViewCustomer = () => {
  const customerList = useSelector((_) => _.customer.all);
  const dispatch = useDispatch();

  const getCustomerList = () => {
    window.api.receiveOnce('db:get', (_data) => {
      if (_data.status && Array.isArray(_data?.data?.result)) {
        dispatch(
          allCustomer({
            actionType: 'FETCH_CUSTOMER_DETAILS',
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

  useEffect(() => {
    getCustomerList();
    return () => {
      dispatch(
        allCustomer({
          actionType: 'RESET_CUSTOMER',
        })
      );
    };
  }, []);
  // return <div style={{ minHeight: '100vh' }}>View Customer</div>;
  return <TableList dataSource={customerList.result || []} />;
};

export default ViewCustomer;
