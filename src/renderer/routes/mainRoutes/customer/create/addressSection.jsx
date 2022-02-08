import PropTypes from 'prop-types';
import { Button } from 'antd';

import CustomForm from 'renderer/components/common/customForm';
import ContentWrapper from 'renderer/components/common/contentWrapper';
import TopHeaderTitle from 'renderer/components/common/topHeaderTitle';

import { getArray } from 'renderer/utils/helper';

const AddressSection = ({
  handleUpdate,
  form_config,
  initialValues,
  currentValues,
}) => {
  return (
    <ContentWrapper wrapperStyle={{ margin: '0 0px 24px' }}>
      <TopHeaderTitle
        title="Addresses"
        wrapperStyle={{
          position: 'sticky',
          top: '64px',
          zIndex: '2',
          background: 'white',
          borderBottom: '1px solid #c3c3c3',
          marginBottom: '0',
          paddingTop: '12px',
        }}
      />
      <ContentWrapper
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          padding: '0 12px 12px',
          marginTop: 0,
          borderLeft: '1px dashed #f0f0f0',
        }}
      >
        <CustomForm
          title="Main Address"
          initialValues={initialValues}
          currentValues={getArray(currentValues?.main_address, false)}
          form_config={form_config}
          handleUpdate={(...params) => handleUpdate('main_address', ...params)}
          wrapperStyle={{
            width: '440px',
            position: 'relative',
          }}
          topHeaderWrapperStyle={{
            top: '98px',
            padding: '24px 0 0',
          }}
          innerWrapperStyle={{ borderLeft: '1px dashed #f0f0f0' }}
        />
        <CustomForm
          title="Shipping Address"
          initialValues={initialValues}
          currentValues={getArray(currentValues?.shipping_address, false)}
          form_config={form_config}
          handleUpdate={(...params) =>
            handleUpdate('shipping_address', ...params)
          }
          wrapperStyle={{
            width: '440px',
            position: 'relative',
          }}
          topHeaderWrapperStyle={{
            top: '98px',
            padding: '24px 0 0',
            display: 'flex',
            justifyContent: 'space-between',
          }}
          innerWrapperStyle={{ borderLeft: '1px dashed #f0f0f0' }}
          additionTitleContent={
            <Button
              onClick={() =>
                handleUpdate('shipping_address', 'COPY_FROM_MAIN_ADDRESS')
              }
            >
              Copy Main Address
            </Button>
          }
        />
      </ContentWrapper>
    </ContentWrapper>
  );
};

AddressSection.defaultProps = {
  handleUpdate: () => {},
  form_config: false,
  initialValues: false,
  currentValues: false,
};

AddressSection.propTypes = {
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

export default AddressSection;
