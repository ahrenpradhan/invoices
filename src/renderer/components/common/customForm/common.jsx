import PropTypes from 'prop-types';
// import AddressesType from './addressesType';
import InputType from './inputType';
import SelectSingleType from './selectSingleType';
import SwitchType from './switchType';
import DateType from './dateType';

const GetFormItem = ({
  value,
  child,
  key,
  type,
  options,
  index,
  defaultValue,
  placeholder,
  rules,
}) => {
  if (Array.isArray(value.child)) {
    return child.map((_, _index) => (
      <GetFormItem
        value={_.value}
        child={_?.child}
        key={Array.isArray(key) ? [...key, _.key] : [key, _.key]}
        type={_?.type}
        index={_index}
        defaultValue={_?.defaultValue || defaultValue}
        placeholder={_?.placeholder || placeholder}
        rules={_?.rules || rules}
      />
    ));
  }
  switch (type) {
    case 'input':
      return (
        <InputType
          value={value}
          placeholder={placeholder}
          defaultValue={defaultValue}
          key={key || value + index}
          customKey={key || value + index}
          index={index}
          rules={rules}
        />
      );
    case 'switch':
      return <SwitchType value={value} customKey={key || value + index} />;
    case 'date':
      return (
        <DateType
          value={value}
          placeholder={placeholder}
          customKey={key || value + index}
          rules={rules}
        />
      );
    case 'select-single':
      return options ? (
        <SelectSingleType
          value={value}
          options={options}
          placeholder={placeholder}
          defaultValue={defaultValue}
          key={key || value + index}
          customKey={key || value + index}
          index={index}
          rules={rules}
        />
      ) : (
        <></>
      );
    default:
      return <></>;
  }
};

GetFormItem.defaultProps = {
  value: '',
  child: [],
  // key,
  type: null,
  options: false,
  index: 0,
  defaultValue: null,
  placeholder: null,
  rules: [],
};

GetFormItem.propTypes = {
  value: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  child: PropTypes.array,
  key: PropTypes.string.isRequired,
  type: PropTypes.string,
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.bool,
  ]),
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rules: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.bool,
  ]),
};
export default GetFormItem;
