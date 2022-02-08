import { Form, Input } from 'antd';
import PropTypes from 'prop-types';

const InputType = ({ value, placeholder, defaultValue, customKey, rules }) => {
  return (
    <Form.Item
      label={value || 'Not defined'}
      name={customKey}
      key={customKey}
      rules={rules || []}
    >
      <Input
        placeholder={placeholder || 'input placeholder'}
        defaultValue={defaultValue}
      />
    </Form.Item>
  );
};

InputType.defaultProps = {
  value: '',
  placeholder: '',
  defaultValue: '',
  rules: false,
  // key: PropTypes.string,
};
InputType.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  customKey: PropTypes.string.isRequired,
  rules: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.bool,
  ]),
};

export default InputType;
