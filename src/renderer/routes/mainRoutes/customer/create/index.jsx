/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCustomer } from 'renderer/appRedux/slices/customerSlice';
import ContentWrapper from 'renderer/components/common/contentWrapper';
import { formConfig } from 'renderer/utils/config';
import {
  getArray,
  getInitialValues,
  getInitialFieldValues,
  validateFormData,
} from 'renderer/utils/helper';
import AboutUserSection from './aboutUserSection';
import AddressSection from './addressSection';

const {
  aboutUserConfig,
  aboutUserConfigInitialValues,
  aboutUserConfigInitialFieldValues,
  addressConfig,
  addressConfigInitialValues,
  addressConfigInitialFieldValues,
} = {
  aboutUserConfig: formConfig.aboutUserConfig,
  aboutUserConfigInitialValues: getInitialValues(formConfig.aboutUserConfig),
  aboutUserConfigInitialFieldValues: getInitialFieldValues(
    formConfig.aboutUserConfig
  ),
  addressConfig: formConfig.addressConfig,
  addressConfigInitialValues: getInitialValues(formConfig.addressConfig),
  addressConfigInitialFieldValues: getInitialFieldValues(
    formConfig.addressConfig
  ),
};

const CreateCustomer = () => {
  const [state, setState] = useState({
    aboutUserConfig,
    aboutUserConfigInitialValues,
    aboutUserConfigInitialFieldValues,
    addressConfig,
    addressConfigInitialValues,
    addressConfigInitialFieldValues,
    loaded: false,
  });
  const dispatch = useDispatch();
  const customerFormData = useSelector((_) => _.customer.create.data);

  const validationStatus = (_data) => {
    const TEMPOBJ = {
      ...customerFormData,
      ..._data,
    };
    return Object.keys(TEMPOBJ)
      .map(
        (_) =>
          validateFormData(
            TEMPOBJ[_],
            _ === 'about' ? aboutUserConfig : addressConfig
          ) || false
      )
      .reduce((acc, current) => acc && current, true);
  };
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
        data: {
          data,
          validation: validationStatus(data),
        },
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
      case 'COPY_FROM_BILLING_ADDRESS':
        updateCustomerDetails({
          [formName]:
            customerFormData?.billing_address ||
            addressConfigInitialFieldValues,
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
    if (!state.loaded) {
      updateCustomerDetails({
        // ['about']: aboutUserConfigInitialValues,
        // ['billing_address']: addressConfigInitialValues,
        // ['shipping_address']: addressConfigInitialValues,
        about: state.aboutUserConfigInitialFieldValues,
        billing_address: state.addressConfigInitialFieldValues,
        shipping_address: state.addressConfigInitialFieldValues,
      });
    }
    return () => {
      resetCustomerDetails();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (!state.loaded) {
      setState({
        ...state,
        loaded: true,
      });
    } else {
      // console.log('changes witnessed');
      const tempValue = customerFormData?.about?.find(
        (_f) => _f.name[0] === 'customer_type'
      )?.value;
      setState({
        ...state,
        aboutUserConfig: {
          ...state.aboutUserConfig,
          inputValues: aboutUserConfig.inputValues
            .map((_) =>
              !_?.alternateParams
                ? _
                : {
                    ..._,
                    ..._.alternateParams(tempValue),
                  }
            )
            .filter((_) => !_?.exclude),
        },
      });
    }
  }, [customerFormData]);
  return (
    <ContentWrapper wrapperStyle={{ marginTop: '24px' }}>
      {state.loaded && (
        <>
          <AboutUserSection
            form_config={state.aboutUserConfig}
            initialValues={state.aboutUserConfigInitialValues}
            currentValues={getArray(customerFormData?.about, false)}
            handleUpdate={(...params) => handleUpdate('about', ...params)}
          />
          <AddressSection
            form_config={state.addressConfig}
            initialValues={state.addressConfigInitialValues}
            currentValues={customerFormData}
            handleUpdate={handleUpdate}
          />
        </>
      )}
    </ContentWrapper>
  );
};

export default CreateCustomer;
