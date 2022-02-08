import PropTypes from 'prop-types';
import CustomForm from 'renderer/components/common/customForm';

const AboutUserSection = ({
  handleUpdate,
  form_config,
  initialValues,
  currentValues,
}) => {
  return (
    <CustomForm
      title="About Business / Individual"
      form_config={form_config}
      initialValues={initialValues}
      currentValues={currentValues}
      handleUpdate={handleUpdate}
      topHeaderWrapperStyle={{ paddingTop: '12px' }}
      innerWrapperStyle={{ borderLeft: '1px dashed #f0f0f0' }}
    />
  );
};

AboutUserSection.defaultProps = {
  handleUpdate: () => {},
  form_config: false,
  initialValues: false,
  currentValues: false,
};

AboutUserSection.propTypes = {
  handleUpdate: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  form_config: PropTypes.object,
  initialValues: PropTypes.oneOfType([
    // eslint-disable-next-line react/forbid-prop-types
    PropTypes.arrayOf(PropTypes.object),
    // eslint-disable-next-line react/forbid-prop-types
    PropTypes.object,
    PropTypes.bool,
  ]),
  currentValues: PropTypes.oneOfType([
    // eslint-disable-next-line react/forbid-prop-types
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.bool,
  ]),
};

export default AboutUserSection;
