const getInitialValues = (form_config) => {
  const formList = form_config?.inputValues;
  const tempInitialValues = {};
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < formList.length; i++) {
    tempInitialValues[formList[i].key] = formList[i].defaultValue || '';
  }
  return tempInitialValues;
};
const getInitialFieldValues = (form_config) => {
  const formList = form_config?.inputValues;
  return Array.isArray(formList)
    ? formList.map((_) => ({
        name: [_.key],
        value: _.defaultValue || '',
      }))
    : false;
};

const aboutUserConfig = {
  formLayout: 'horizontal',
  formItemLayout: {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 12,
    },
  },
  buttonItemLayout: {
    wrapperCol: {
      // span: 16,
      offset: 6,
    },
  },
  inputValues: [
    {
      value: 'Customer Type',
      key: 'customer_type',
      defaultValue: '',
      type: 'input',
    },
    {
      value: 'Primary Contact',
      key: 'primary_contact',
      defaultValue: '',
      type: 'input',
      // salutation,first name, last name
    },
    {
      value: 'Company Name',
      key: 'company_name',
      defaultValue: '',
      type: 'input',
    },
    {
      value: 'Company Display Name',
      key: 'company_display_name',
      defaultValue: '',
      type: 'input',
      // the name that will be shown
    },
    {
      value: 'Customer Email',
      key: 'customer_email',
      defaultValue: '',
      type: 'input',
    },
    {
      value: 'Phone Number',
      key: 'phoen_number',
      defaultValue: '',
      type: 'input',
      // work phone , mobile
    },
    {
      value: 'Designation',
      key: 'designation',
      defaultValue: '',
      type: 'input',
    },
    {
      value: 'Department',
      key: 'department',
      defaultValue: '',
      type: 'input',
    },
    {
      value: 'Website',
      key: 'website',
      defaultValue: '',
      type: 'input',
    },
    // {
    //   value: 'Addresses',
    //   key: 'addresses',
    //   type: 'addressesInput',
    // },
  ],
};
const aboutUserConfigInitialValues = getInitialValues(aboutUserConfig);
const aboutUserConfigInitialFieldValues =
  getInitialFieldValues(aboutUserConfig);

const addressConfig = {
  formItemLayout: {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 14,
    },
  },
  inputValues: [
    {
      value: 'Attention',
      key: 'attention',
      defaultValue: '',
      type: 'input',
    },
    {
      value: 'Country / Region',
      key: 'country_region',
      defaultValue: '',
      type: 'input',
    },
    {
      value: 'Address Line 1',
      key: 'address_line_1',
      defaultValue: '',
      type: 'input',
    },
    {
      value: 'Address Line 2',
      key: 'address_line_2',
      defaultValue: '',
      type: 'input',
    },
    {
      value: 'City',
      key: 'city',
      defaultValue: '',
      type: 'input',
    },
    {
      value: 'State',
      key: 'state',
      defaultValue: '',
      type: 'input',
    },
    {
      value: 'Zip code',
      key: 'zip_code',
      defaultValue: '',
      type: 'input',
    },
    {
      value: 'Phone',
      key: 'phone',
      defaultValue: '',
      type: 'input',
    },
    {
      value: 'Fax',
      key: 'fax',
      defaultValue: '',
      type: 'input',
    },
  ],
};
const addressConfigInitialValues = getInitialValues(addressConfig);
const addressConfigInitialFieldValues = getInitialFieldValues(addressConfig);

export {
  aboutUserConfig,
  aboutUserConfigInitialValues,
  aboutUserConfigInitialFieldValues,
  addressConfig,
  addressConfigInitialValues,
  addressConfigInitialFieldValues,
};
