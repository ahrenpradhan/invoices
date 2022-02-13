/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { Row, Col, Input } from 'antd';

const { TextArea } = Input;
const CustomCustomerAddress = ({
  title,
  formItemLayout,
  // customerReduxState,
  currentData,
  handleUpdate,
  disabled,
}) => {
  const handleChange = (e) => {
    handleUpdate(e.target.value);
  };
  return (
    <Row style={{ padding: '0 1em 1em' }}>
      <Col span={formItemLayout?.labelCol?.span || 6}>{title}</Col>
      <Col span={formItemLayout?.wrapperCol?.span || 6}>
        <TextArea
          value={currentData?.address}
          rows={6}
          onChange={handleChange}
          disabled={disabled}
        />
      </Col>
    </Row>
  );
};

CustomCustomerAddress.defaultProps = {
  formItemLayout: false,
  currentData: false,
  disabled: false,
};
CustomCustomerAddress.propTypes = {
  title: PropTypes.string.isRequired,
  formItemLayout: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  // customerReduxState: PropTypes.object.isRequired,
  currentData: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  handleUpdate: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default CustomCustomerAddress;
