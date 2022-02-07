/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { Form } from 'antd';

import ContentWrapper from 'renderer/components/common/contentWrapper';
import TopHeaderTitle from 'renderer/components/common/topHeaderTitle';
import { getObject } from 'renderer/utils/helper';
import GetFormItem from './common';

const CustomForm = ({
  title,
  form_config,
  initialValues,
  currentValues,
  handleUpdate,
  wrapperStyle,
  topHeaderWrapperStyle,
  additionTitleContent,
}) => {
  const [form] = Form.useForm();

  const onFieldsChange = (formContent, formContent2) => {
    // console.log(formContent);
    // console.log(formContent2);
    handleUpdate('ON_FIELD_CHANGE', formContent2);
  };
  return (
    <ContentWrapper
      wrapperStyle={{ margin: 0, paddingTop: 0, ...getObject(wrapperStyle) }}
    >
      {title && (
        <div
          style={{
            width: '100%',
            position: 'sticky',
            top: '64px',
            zIndex: '1',
            background: 'white',
            borderBottom: '1px solid #c3c3c3',
            ...getObject(topHeaderWrapperStyle),
          }}
        >
          <TopHeaderTitle title={title} />
          {additionTitleContent && additionTitleContent}
        </div>
      )}
      <ContentWrapper wrapperStyle={{ margin: 0, paddingBottom: 0 }}>
        <Form
          form={form}
          {...(form_config?.formItemLayout || {})}
          layout={form_config?.formLayout || {}}
          initialValues={{
            layout: form_config?.formLayout || 'vertical',
            ...initialValues,
          }}
          {...(currentValues ? { fields: currentValues } : {})}
          onFieldsChange={onFieldsChange}
          labelWrap
        >
          {(form_config?.inputValues || []).map((_, index) =>
            GetFormItem({ ..._, index })
          )}
          {/* {form_config?.inputValues?.length && (
            <Form.Item {...form_config.buttonItemLayout} key="submit">
              <Button type="primary">Submit</Button>
            </Form.Item>
          )} */}
        </Form>
      </ContentWrapper>
    </ContentWrapper>
  );
};

CustomForm.defaultProps = {
  title: '',
  form_config: {},
  initialValues: {},
  currentValues: false,
  handleUpdate: () => {},
  wrapperStyle: {},
  topHeaderWrapperStyle: {},
  additionTitleContent: <></>,
};

CustomForm.propTypes = {
  title: PropTypes.string,
  form_config: PropTypes.object,
  initialValues: PropTypes.object,
  currentValues: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  handleUpdate: PropTypes.elementType,
  wrapperStyle: PropTypes.object,
  topHeaderWrapperStyle: PropTypes.object,
  additionTitleContent: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.object,
  ]),
};

export default CustomForm;
