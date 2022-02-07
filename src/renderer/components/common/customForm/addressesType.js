import { Form, Input } from 'antd';
import { getFormItem } from './common';

const AddressConfig = [
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
    value: 'fax',
    key: 'fax',
    type: 'input',
  },
];

const addressesType = ({ key }) => {
  return (
    <>
      {(Array.isArray(AddressConfig) ? AddressConfig : []).map((_, index) =>
        getFormItem({
          ..._,
          key: Array.isArray(key) ? [...key, _key] : [key, _.key],
          index,
        })
      )}
      {/* <Form.Item
        name={['address', 'street']}
        // noStyle
        // rules={[{ required: true, message: 'Street is required' }]}
      >
        <Input style={{ width: '50%' }} placeholder="Input street" />
      </Form.Item> */}
    </>
  );
};

export default addressesType;
