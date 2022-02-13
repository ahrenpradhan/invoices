/* eslint-disable no-plusplus */
/* eslint-disable no-case-declarations */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import Moment from 'moment';

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

export const getInitialFieldValues = (
  form_config,
  extra = {
    dateToString: false,
  }
) => {
  const formList = form_config?.inputValues;
  return Array.isArray(formList)
    ? formList.map((_) => ({
        name: [_.key],
        value:
          // eslint-disable-next-line no-nested-ternary
          _.type === 'date'
            ? extra?.dateToString
              ? Moment(
                  typeof _?.defaultValue === 'string'
                    ? new Date(_?.defaultValue)
                    : _?.defaultValue
                ).toISOString()
              : Moment(
                  typeof _?.defaultValue === 'string'
                    ? new Date(_?.defaultValue)
                    : _?.defaultValue
                )
            : _?.defaultValue || '',
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

export const addressToText = (addressObj) => {
  const tempAddress = [];
  if (addressObj?.attention) tempAddress.push(`${addressObj?.attention}`);
  if (addressObj?.address_line_1)
    tempAddress.push(`${addressObj?.address_line_1}`);
  if (addressObj?.address_line_2)
    tempAddress.push(`${addressObj?.address_line_2}`);

  if (addressObj?.city || addressObj?.state) {
    tempAddress.push(
      [
        addressObj?.city && `${addressObj?.city}`,
        addressObj?.state && `${addressObj?.state}`,
      ]
        .filter((_) => _)
        .join(', ')
    );
  }
  if (addressObj?.country_region || addressObj?.zip_code) {
    tempAddress.push(
      [
        addressObj?.country_region && `${addressObj?.country_region}`,
        addressObj?.zip_code && `${addressObj?.zip_code}`,
      ]
        .filter((_) => _)
        .join(' - ')
    );
  }
  if (addressObj?.phone) tempAddress.push(`Phone : ${addressObj?.phone}`);
  if (addressObj?.fax) tempAddress.push(`Fax : ${addressObj?.fax}`);
  return tempAddress.join(',\n');
};
