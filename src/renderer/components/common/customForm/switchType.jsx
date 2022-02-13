import { Form, Switch } from 'antd';
import PropTypes from 'prop-types';

const SwitchType = ({ value, customKey }) => {
  return (
    <Form.Item
      name={customKey}
      label={value || 'Not defined'}
      valuePropName="checked"
    >
      <Switch />
    </Form.Item>
  );
};

SwitchType.defaultProps = {
  value: '',
};
SwitchType.propTypes = {
  value: PropTypes.string,
  customKey: PropTypes.string.isRequired,
};

export default SwitchType;
