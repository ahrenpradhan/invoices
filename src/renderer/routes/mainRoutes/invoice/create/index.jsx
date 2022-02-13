/* eslint-disable no-sparse-arrays */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createInvoice } from 'renderer/appRedux/slices/invoiceSlice';
import ContentWrapper from 'renderer/components/common/contentWrapper';
import { invoiceConfig } from 'renderer/utils/config';
import { getInitialFieldValues } from 'renderer/utils/helper';

import { Collapse } from 'antd';
import InvoiceSettings from './invoiceSettings';
import CustomerDetails from './customerDetails';
import ProductDetails from './productDetails';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  `;
const CreateInvoice = () => {
  const [state, setState] = useState({
    invoiceFormData: false,
    customerDetailsFormData: false,
    loaded: false,
  });
  const invoiceReduxState = useSelector((_) => _.invoice.create);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!state?.loaded) {
      const tempData = {
        invoiceFormData: invoiceConfig?.config?.formConfig,
        customerDetailsFormData: invoiceConfig?.customerConfig?.formConfig,
        loaded: true,
      };
      dispatch(
        createInvoice({
          actionType: 'UPDATE_INVOICE_DATA',
          data: {
            // ...invoiceConfig.initData,
            config: getInitialFieldValues(tempData.invoiceFormData, {
              dateToString: true,
            }),
          },
        })
      );
      setState(tempData);
    } else {
      return () => {
        dispatch(
          createInvoice({
            actionType: 'RESET_INVOICE_DATA',
            data: invoiceConfig.initData,
          })
        );
      };
    }
    return () => {};
  }, [, state]);
  return (
    <ContentWrapper
      wrapperStyle={{
        background: 'unset',
      }}
    >
      <Collapse accordion defaultActiveKey={['1']}>
        <Panel header="Invoice Settings" key="1">
          {state?.invoiceFormData ? (
            <InvoiceSettings
              formConfig={state?.invoiceFormData}
              currentValues={getInitialFieldValues({
                inputValues: invoiceReduxState?.data?.config?.map((_) => ({
                  ..._,
                  defaultValue: _.value,
                  type: state?.invoiceFormData?.inputValues.find(
                    (_t) => _t?.key === _?.name[0]
                  )?.type,
                  key: _?.name[0],
                })),
              })}
            />
          ) : (
            <>Loading</>
          )}
        </Panel>
        <Panel header="Customer Details" key="2">
          {state?.customerDetailsFormData ? (
            <CustomerDetails formConfig={state?.customerDetailsFormData} />
          ) : (
            <>Loading</>
          )}
        </Panel>
        <Panel header="Product Details" key="3">
          <ProductDetails />
        </Panel>
        <Panel header="Tax Settings" key="4">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </ContentWrapper>
  );
};

export default CreateInvoice;
