import { Form, DatePicker } from 'antd';
import PropTypes from 'prop-types';
// import moment from 'moment';

const DateType = ({ value, customKey, placeholder, rules }) => {
  return (
    <Form.Item
      name={customKey}
      label={value || 'Not defined'}
      rules={rules || []}
      // valuePropName="checked"
    >
      <DatePicker
        placeholder={placeholder || 'input placeholder'}
        format="DD/MM/YYYY"
        // defaultValue={moment()}
        // style={{ minWidth: '10em' }}
      />
    </Form.Item>
  );
};

DateType.defaultProps = {
  value: '',
  placeholder: '',
  rules: false,
};
DateType.propTypes = {
  value: PropTypes.string,
  customKey: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  rules: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.bool,
  ]),
};

export default DateType;
