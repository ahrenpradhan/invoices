/* eslint-disable no-console */
// import { useState, useEffect } from 'react';
import HeaderComponent from 'renderer/components/header';

const CreateCustomer = () => {
  const handleUpdate = (action, data) => {
    switch (action) {
      case 'CREATE_CUSTOMER':
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
        },
        create: {
          title: 'Create',
          key: 'create',
          onClick: (...params) => handleUpdate('CREATE_CUSTOMER', ...params),
          customProps: {
            type: 'primary',
          },
        },
      }}
    />
  );
};

export default CreateCustomer;
