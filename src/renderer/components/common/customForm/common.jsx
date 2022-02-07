import PropTypes from 'prop-types';
// import AddressesType from './addressesType';
import InputType from './inputType';

const GetFormItem = ({
  value,
  child = null,
  key,
  type = null,
  index = null,
  defaultValue,
  placeholder = null,
}) => {
  if (Array.isArray(value.child)) {
    return child.map((_, _index) => (
      <GetFormItem
        value={_.value}
        child={_?.child}
        key={Array.isArray(key) ? [...key, _.key] : [key, _.key]}
        type={_?.type}
        index={_index}
        defaultValue={defaultValue}
        placeholder={placeholder}
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
        />
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
  index: 0,
  defaultValue: null,
  placeholder: null,
};

GetFormItem.propTypes = {
  value: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  child: PropTypes.array,
  key: PropTypes.string.isRequired,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default GetFormItem;
