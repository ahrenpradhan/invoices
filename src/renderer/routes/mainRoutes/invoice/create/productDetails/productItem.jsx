/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Row, Col, Input } from 'antd';
import { MdDragIndicator } from 'react-icons/md';
import { AppstoreTwoTone, DeleteFilled } from '@ant-design/icons';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import styled from 'styled-components';

const { TextArea } = Input;

const ProductItemWrapper = styled.li`
  padding: 1em 2em;
  border: 1px dashed #fff;
  margin-bottom: 0.5em;
  border-radius: 1em;
  background: rgb(250, 250, 250, 0.4);
  opacity: 1;
  transition: border 250ms ease-in-out, background 250ms ease-in-out,
    opacity 250ms ease-in-out;

  &:hover {
    background: rgb(250, 250, 250, 0.6);
  }
`;

const ProductItem = ({ id, index, selectedRow }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  return (
    <ProductItemWrapper
      ref={setNodeRef}
      style={{
        // ...style,
        transform: CSS.Transform.toString(
          selectedRow === id
            ? {
                ...transform,
                scaleX: 1.01,
                scaleY: 1.02,
              }
            : transform
        ),
        transition,
        position: 'relative',
        ...(selectedRow === id
          ? {
              zIndex: 1,
              background: 'rgb(250,250,250, 0.8)',
            }
          : {
              zIndex: 0,
              opacity: selectedRow === null ? 1 : 0.5,
            }),
        ...(selectedRow !== null
          ? {
              borderColor: '#c3c3c3',
              cursor: 'move',
            }
          : {}),
      }}
      {...attributes}
    >
      <Row gutter={16}>
        <Col span={1}>
          {/* <AppstoreTwoTone {...listeners} style={{ cursor: 'move' }} /> */}
          <MdDragIndicator {...listeners} style={{ cursor: 'move' }} />
        </Col>
        <Col span={7}>
          <TextArea rows={4} />
        </Col>
        <Col span={3}>
          <Input />
        </Col>
        <Col span={4}>
          <Input type="number" defaultValue={0} />
        </Col>
        <Col span={3}>
          <Input type="number" defaultValue={0} />
        </Col>
        <Col span={4}>
          <Input type="number" defaultValue={0} disabled />
        </Col>
        <Col span={1}>
          <DeleteFilled />
        </Col>
      </Row>
      {/* ... */}
    </ProductItemWrapper>
  );
};

export default ProductItem;
