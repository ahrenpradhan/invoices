import { Form, Input } from 'antd';
import PropTypes from 'prop-types';

const InputType = ({ value, placeholder, defaultValue, customKey }) => {
  return (
    <Form.Item label={value || 'Not defined'} name={customKey} key={customKey}>
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
  // key: PropTypes.string,
};
InputType.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  customKey: PropTypes.string.isRequired,
};

export default InputType;
