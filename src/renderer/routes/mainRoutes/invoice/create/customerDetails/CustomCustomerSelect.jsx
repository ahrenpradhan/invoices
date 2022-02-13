/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { Row, Col, Select } from 'antd';

const { Option } = Select;

const CustomCustomerSelect = ({
  title,
  formItemLayout,
  customerReduxState,
  currentData,
  handleUpdate,
}) => {
  const handleChange = (id) => {
    const temp = customerReduxState?.result?.find((_) => _._id === id) || false;
    if (temp) handleUpdate(temp);
  };
  return (
    <Row style={{ padding: '0 1em 1em' }}>
      <Col span={formItemLayout?.labelCol?.span || 6}>{title}</Col>
      <Col span={formItemLayout?.wrapperCol?.span || 6}>
        {currentData ? (
          <Select
            showSearch
            placeholder="Select a customer"
            optionFilterProp="label"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            value={currentData?.customer?._id}
            onChange={handleChange}
            style={{ width: '100%' }}
          >
            {Array.isArray(customerReduxState?.result) ? (
              customerReduxState?.result?.map((_) => (
                <Option value={_._id} key={_._id}>
                  {`${_?.company_display_name || _?.company_name} - ${
                    _?.billingAddress.city
                  } - ${_?.billingAddress.state}`}
                </Option>
              ))
            ) : (
              <></>
            )}
          </Select>
        ) : (
          <>Loading</>
        )}
      </Col>
    </Row>
  );
};
CustomCustomerSelect.defaultProps = {
  formItemLayout: false,
  currentData: false,
};
CustomCustomerSelect.propTypes = {
  title: PropTypes.string.isRequired,
  formItemLayout: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  customerReduxState: PropTypes.object.isRequired,
  currentData: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  handleUpdate: PropTypes.func.isRequired,
};

export default CustomCustomerSelect;
