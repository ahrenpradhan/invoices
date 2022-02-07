import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';

import ContentWrapper from 'renderer/components/common/contentWrapper';
import TopHeaderTitle from 'renderer/components/common/topHeaderTitle';
import { getFormItem } from './common';
import { getObject } from 'renderer/utils/helper';

const CustomForm = ({
  title,
  form_config = {},
  handleUpdate = () => {},
  wrapperStyle = {},
  topHeaderWrapperStyle = {},
  additionTitleContent = null,
}) => {
  const [form] = Form.useForm();
  const _onValuesChange = (formContent, formContent2) => {
    // console.log(formContent);
    console.log(formContent2);
    // handleUpdate('onValuesChange', formContent);
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
          {...(form_config?.formItemLayout || {})}
          layout={form_config?.formLayout || {}}
          form={form}
          initialValues={{ layout: form_config?.formLayout || 'vertical' }}
          onValuesChange={_onValuesChange}
          labelWrap
        >
          {(form_config?.inputValues || []).map((_, index) =>
            getFormItem({ ..._, index })
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

export default CustomForm;
