import { Form, Input } from 'antd';
import addressesType from './addressesType';
export const getFormItem = ({
  value,
  children = null,
  placeholder,
  defaultValue = '',
  key,
  type = null,
  index = null,
}) => {
  if (Array.isArray(value.children)) {
    return children.map((_, _index) =>
      getFormItem({
        ..._,
        key: Array.isArray(key) ? [...key, _key] : [key, _.key],
        index: index + '-' + _index,
      })
    );
  } else {
    switch (type) {
      case 'input':
        return (
          <Form.Item label={value || 'Not defined'} name={key || value + index}>
            <Input
              placeholder={placeholder || 'input placeholder'}
              defaultValue={defaultValue}
            />
          </Form.Item>
        );
      case 'addressesInput':
        return (
          <Form.Item label={value || 'Not defined'} name={key || value + index}>
            {addressesType({ key })}
          </Form.Item>
        );
      default:
        return <></>;
    }
  }
};
