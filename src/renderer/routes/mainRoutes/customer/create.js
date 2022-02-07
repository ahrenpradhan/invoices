import { useState, useEffect } from 'react';
import CustomForm from 'renderer/components/common/customForm';
import ContentWrapper from 'renderer/components/common/contentWrapper';
import TopHeaderTitle from 'renderer/components/common/topHeaderTitle';

const form1_config = {
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
      type: 'input',
    },
    {
      value: 'Primary Contact',
      key: 'primary_contact',
      type: 'input',
      // salutation,first name, last name
    },
    {
      value: 'Company Name',
      key: 'company_name',
      type: 'input',
    },
    {
      value: 'Company Display Name',
      key: 'company_display_name',
      type: 'input',
      // the name that will be shown
    },
    {
      value: 'Customer Email',
      key: 'customer_email',
      type: 'input',
    },
    {
      value: 'Phone Number',
      key: 'phoen_number',
      type: 'input',
      // work phone , mobile
    },
    {
      value: 'Designation',
      key: 'designation',
      type: 'input',
    },
    {
      value: 'Department',
      key: 'department',
      type: 'input',
    },
    {
      value: 'Website',
      key: 'website',
      type: 'input',
    },
    // {
    //   value: 'Addresses',
    //   key: 'addresses',
    //   type: 'addressesInput',
    // },
  ],
};
const form2_config = {
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
      type: 'input',
    },
    {
      value: 'Country / Region',
      key: 'country_region',
      type: 'input',
    },
    {
      value: 'Address Line 1',
      key: 'address_line_1',
      type: 'input',
    },
    {
      value: 'Address Line 2',
      key: 'address_line_2',
      type: 'input',
    },
    {
      value: 'City',
      key: 'city',
      type: 'input',
    },
    {
      value: 'State',
      key: 'state',
      type: 'input',
    },
    {
      value: 'Zip code',
      key: 'zip_code',
      type: 'input',
    },
    {
      value: 'Phone',
      key: 'phone',
      type: 'input',
    },
    {
      value: 'Fax',
      key: 'fax',
      type: 'input',
    },
  ],
};

const AboutUserSection = ({ handleUpdate, form_config }) => {
  return (
    <CustomForm
      title={'About Business / Individual'}
      form_config={form_config}
      handleUpdate={handleUpdate}
    />
  );
};

const AddressSection = ({ handleUpdate, form_config }) => {
  return (
    <ContentWrapper wrapperStyle={{ margin: '0 0px 24px' }}>
      <TopHeaderTitle
        title={'Addresses'}
        wrapperStyle={{
          position: 'sticky',
          top: '64px',
          zIndex: '2',
          background: 'white',
          borderBottom: '1px solid #c3c3c3',
          marginBottom: '0',
        }}
      />
      <ContentWrapper
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          padding: '0 12px 12px',
          marginTop: 0,
        }}
      >
        <CustomForm
          title={'Main Address'}
          form_config={form_config}
          handleUpdate={handleUpdate.bind(this, 'main_address')}
          wrapperStyle={{
            width: '440px',
            position: 'relative',
          }}
          topHeaderWrapperStyle={{
            top: '98px',
            padding: '24px 0 0',
          }}
        />
        <CustomForm
          title={'Shipping Address'}
          form_config={form_config}
          handleUpdate={handleUpdate.bind(this, 'shipping_address')}
          wrapperStyle={{
            width: '440px',
            position: 'relative',
          }}
          topHeaderWrapperStyle={{
            top: '98px',
            padding: '24px 0 0',
            display: 'flex',
            justifyContent: 'space-between',
          }}
          additionTitleContent={<div>Copy Main Address</div>}
        />
      </ContentWrapper>
    </ContentWrapper>
  );
};

const CreateCustomer = () => {
  const handleUpdate = (formName, action, data) => {
    switch (action) {
      case 'onValuesChange':
        console.log(data);
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
  }, []);
  return (
    <ContentWrapper wrapperStyle={{ marginTop: '24px' }}>
      <AboutUserSection
        form_config={form1_config}
        handleUpdate={handleUpdate.bind(this, 'about')}
      />
      <AddressSection form_config={form2_config} handleUpdate={handleUpdate} />
    </ContentWrapper>
  );
};

export default CreateCustomer;
