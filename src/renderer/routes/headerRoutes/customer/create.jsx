/* eslint-disable no-console */
// import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createCustomer } from 'renderer/appRedux/slices/customerSlice';
import HeaderComponent from 'renderer/components/header';

const CreateCustomer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const customerFormData = useSelector((_) => _.customer.create.validation);
  const handleUpdate = (action, data) => {
    switch (action) {
      case 'CREATE_CUSTOMER':
        dispatch(
          createCustomer({
            actionType: 'CREATE_CUSTOMER_DATA',
          })
        );
        window.api.receiveOnce('db:create', (_data) => {
          // console.log(`Received ${data} from main process`);
          console.log(_data);
          if (_data.error) {
            alert(_data.error || 'Something went wrong.');
          }
        });
        break;
      case 'DISCARD_CUSTOMER':
        navigate(`/customer/view`);
        break;
      default:
        console.log('Action not defined');
        console.log(data);
        break;
    }
  };
  return (
    <HeaderComponent
      title="Create Customer"
      headerConfig={{
        discard: {
          title: 'Discard',
          key: 'discard',
          onClick: (...params) => handleUpdate('DISCARD_CUSTOMER', ...params),
          customProps: {
            type: !customerFormData ? 'primary' : 'default',
            danger: true,
          },
        },
        create: {
          title: 'Create',
          key: 'create',
          onClick: (...params) => handleUpdate('CREATE_CUSTOMER', ...params),
          customProps: {
            type: 'primary',
            disabled: !customerFormData,
          },
        },
      }}
    />
  );
};

export default CreateCustomer;
