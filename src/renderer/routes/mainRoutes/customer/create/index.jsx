import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCustomer } from 'renderer/appRedux/slices/customerSlice';

import ContentWrapper from 'renderer/components/common/contentWrapper';

import { getArray } from 'renderer/utils/helper';

import AboutUserSection from './aboutUserSection';
import AddressSection from './addressSection';
import {
  aboutUserConfig,
  aboutUserConfigInitialValues,
  aboutUserConfigInitialFieldValues,
  addressConfig,
  addressConfigInitialValues,
  addressConfigInitialFieldValues,
} from './common';

const CreateCustomer = () => {
  const dispatch = useDispatch();
  const customerFormData = useSelector((state) => state.customer.create.data);

  const resetCustomerDetails = () => {
    dispatch(
      createCustomer({
        actionType: 'RESET_CUSTOMER_DATA',
      })
    );
  };
  const updateCustomerDetails = (data) => {
    dispatch(
      createCustomer({
        actionType: 'UPDATE_CUSTOMER_DATA',
        data,
      })
    );
  };
  const handleUpdate = (formName, action, data) => {
    switch (action) {
      case 'ON_FIELD_CHANGE':
        updateCustomerDetails({
          [formName]: data,
        });
        break;
      case 'COPY_FROM_MAIN_ADDRESS':
        updateCustomerDetails({
          [formName]:
            customerFormData?.main_address || addressConfigInitialFieldValues,
        });
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    // window.api.receiveOnce('db:get', (data) => {
    //   // console.log(`Received ${data} from main process`);
    //   console.log(data);
    // });
    // window.api.send('db:operation', 'db:get', 'find', 'customers');

    // onLoad
    updateCustomerDetails({
      // ['about']: aboutUserConfigInitialValues,
      // ['main_address']: addressConfigInitialValues,
      // ['shipping_address']: addressConfigInitialValues,
      about: aboutUserConfigInitialFieldValues,
      main_address: addressConfigInitialFieldValues,
      shipping_address: addressConfigInitialFieldValues,
    });
    return () => {
      resetCustomerDetails();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ContentWrapper wrapperStyle={{ marginTop: '24px' }}>
      <AboutUserSection
        form_config={aboutUserConfig}
        initialValues={aboutUserConfigInitialValues}
        currentValues={getArray(customerFormData?.about, false)}
        handleUpdate={(...params) => handleUpdate('about', ...params)}
      />
      <AddressSection
        form_config={addressConfig}
        initialValues={addressConfigInitialValues}
        currentValues={customerFormData}
        handleUpdate={handleUpdate}
      />
    </ContentWrapper>
  );
};

export default CreateCustomer;
