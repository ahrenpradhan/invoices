/* eslint-disable react/jsx-props-no-spreading */
import { useDispatch } from 'react-redux';
import { Row, Col, Button, Input } from 'antd';
import styled from 'styled-components';
import { createInvoice } from 'renderer/appRedux/slices/invoiceSlice';
import ProductList from './productList';

const ProductAddButton = styled((props) => <Button {...props} />)`
  // border: 1px dashed rgb(240, 240, 240, 0.8);
  width: 100%;

  &:hover {
    // background: rgb(240, 240, 240, 1);
  }
`;

const ProductDetails = () => {
  const dispatch = useDispatch();
  const handleNewAddProductToList = () => {
    dispatch(
      createInvoice({
        actionType: 'ADD_NEW_PRODUCT_TO_LIST',
      })
    );
  };
  return (
    <>
      <div style={{ padding: '0 2em' }}>
        <Row gutter={16}>
          <Col span={1} />
          <Col span={7} style={{ minWidth: '10em' }}>
            Product Details
          </Col>
          <Col span={3}>HSN Code</Col>
          <Col span={4}>Rate</Col>
          <Col span={3}>Qty</Col>
          <Col span={4}>Total</Col>
        </Row>
      </div>
      <ProductList />
      <div style={{ padding: '0 2em' }}>
        <Row gutter={16}>
          <Col span={1} />
          <Col
            span={7}
            style={{ borderTop: '1px solid #f1f1f1', paddingTop: '1em' }}
          >
            <ProductAddButton
              onClick={handleNewAddProductToList}
              type="primary"
            >
              Add New Product
            </ProductAddButton>
          </Col>
          <Col span={7} />
          <Col
            span={3}
            style={{ borderTop: '1px solid #f1f1f1', paddingTop: '1em' }}
          >
            <Input disabled type="number" defaultValue={0} />
          </Col>
          <Col
            span={4}
            style={{ borderTop: '1px solid #f1f1f1', paddingTop: '1em' }}
          >
            <Input disabled type="number" defaultValue={0} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProductDetails;
