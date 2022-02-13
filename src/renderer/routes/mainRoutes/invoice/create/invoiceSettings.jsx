import PropTypes from 'prop-types';
import CustomForm from 'renderer/components/common/customForm';
import { getInitialFieldValues, getArray } from 'renderer/utils/helper';

const InvoiceSettings = ({ formConfig, currentValues }) => {
  return (
    <CustomForm
      form_config={formConfig}
      initialValues={getInitialFieldValues(formConfig)}
      currentValues={getArray(currentValues, false)}
    />
  );
};

InvoiceSettings.defaultProps = {
  formConfig: false,
  currentValues: false,
};
InvoiceSettings.propTypes = {
  formConfig: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.bool,
    PropTypes.node,
  ]),
  currentValues: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.bool,
  ]),
};

export default InvoiceSettings;
