import { Form, Select } from 'antd';
import PropTypes from 'prop-types';

const SelectSingleType = ({
  value,
  options,
  placeholder,
  // defaultValue,
  customKey,
  rules,
}) => {
  return (
    <Form.Item
      label={value || 'Not defined'}
      name={customKey}
      key={customKey}
      rules={rules || []}
    >
      <Select
        placeholder={
          placeholder || 'Select a option and change input text above'
        }
        // onChange={onGenderChange}
        allowClear
        filterOption={false}
      >
        {options.map((_) => (
          <Select.Option value={_.value} key={_?.key || _.value}>
            {_?.title || _.value}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

SelectSingleType.defaultProps = {
  value: '',
  placeholder: '',
  // defaultValue: '',
  rules: false,
  // key: PropTypes.string,
};

SelectSingleType.propTypes = {
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string,
  // defaultValue: PropTypes.string,
  customKey: PropTypes.string.isRequired,
  rules: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.bool,
  ]),
};

export default SelectSingleType;
