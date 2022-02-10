/* eslint-disable no-plusplus */
/* eslint-disable no-case-declarations */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';

export const getObject = (OBJ) => (typeof OBJ === 'object' ? OBJ : {});

export const getArray = (arr, elseValue = null) => {
  if (Array.isArray(arr)) {
    return arr;
  }
  return elseValue === null ? [] : elseValue;
};

export const getInitialValues = (form_config) => {
  const formList = form_config?.inputValues;
  const tempInitialValues = {};
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < formList.length; i++) {
    tempInitialValues[formList[i].key] = formList[i].defaultValue || '';
  }
  return tempInitialValues;
};

export const getInitialFieldValues = (form_config) => {
  const formList = form_config?.inputValues;
  return Array.isArray(formList)
    ? formList.map((_) => ({
        name: [_.key],
        value: _.defaultValue || '',
      }))
    : false;
};

export const extractDataFromFormData = (formData) => {
  if (!Array.isArray(formData)) return false;
  const tempData = {};
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < formData.length; i++) {
    tempData[formData[i].name[0] || `Param_${i}`] = formData[i].value;
  }
  return tempData;
};

export const validateFormData = (formData, form_config) => {
  const extractedFormData = extractDataFromFormData(formData);
  if (!Array.isArray(form_config?.inputValues)) {
    return false;
  }
  let { inputValues } = form_config;
  inputValues = inputValues
    .filter((_) =>
      _?.rules?.reduce((acc, current) => acc || current?.required, false)
    )
    .map((_) => _.key);
  for (let i = 0; i < inputValues.length; i++) {
    if (extractedFormData[inputValues[i]]?.length === 0) {
      return false;
    }
  }
  return true;
};

export const customerHelper = (action = '', data = {}) => {
  switch (action) {
    case 'GET_CUSTOMER_DATA':
      if (!data?.about) {
        return false;
      }
      const aboutCustomerData = extractDataFromFormData(data?.about) || {};
      const billingAddress =
        extractDataFromFormData(data?.billing_address) || {};
      const shippingAddress =
        extractDataFromFormData(data?.shipping_address) || {};
      return {
        ...aboutCustomerData,
        billingAddress,
        shippingAddress,
      };
    default:
      break;
  }
  return false;
};

customerHelper.propTypes = {
  action: PropTypes.string,
  data: PropTypes.object,
};
