import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Switch, Button, Tooltip } from 'antd';
import moment from 'moment';

const columns = [
  {
    title: 'Name',
    width: 150,
    dataIndex: 'company_display_name',
    key: '1',
    fixed: 'left',
    render: (text, record) => <span>{text || record.company_name}</span>,
    style: { fontWeight: 'bold' },
  },
  {
    title: 'Customer Email',
    width: 180,
    dataIndex: 'customer_email',
    key: 'customer_email',
    fixed: 'left',
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: '2',
    width: 120,
    render: (text) => <span>{moment(text).format('DD/MM/YYYY')}</span>,
  },
  {
    title: 'Address',
    children: [
      { title: 'Billing', key: 'billingAddress' },
      { title: 'Shipping', key: 'shippingAddress' },
    ].map((_a) => ({
      ..._a,
      dataIndex: _a.key,
      width: 200,
      render: (_) => (
        <Tooltip title={_.attention}>
          {_.attention && (
            <div>
              <span style={{ fontWeight: 'bold' }}>Attention: </span>
              <span>{_.attention} </span>
            </div>
          )}
          <div>
            <div>{_.address_line_1}</div>
            {_.address_line_2 && <div>{_.address_line_2}</div>}
            <div>
              <span>{_.city && `${_.city}, `}</span>
              <span>{_.state && `${_.state}, `}</span>
            </div>
            <div>
              <span>{_.country_region && `${_.country_region} `}</span>
              <span>{_.zip_code && ` - ${_.zip_code}.`}</span>
            </div>
          </div>
          {_.phone && (
            <div>
              <span style={{ fontWeight: 'bold' }}>Phone: </span>
              <span>{_.phone} </span>
            </div>
          )}
          {_.fax && (
            <div>
              <span style={{ fontWeight: 'bold' }}>Phone: </span>
              <span>{_.fax} </span>
            </div>
          )}
        </Tooltip>
      ),
    })),
    // children: [
    //   {
    //     title: 'Billing',
    //     dataIndex: 'billingAddress',
    //     key: 'billingAddress',
    //     width: 200,
    //     render: (_) => (
    //       <Tooltip title={_.attention}>
    //         {/* {_.attention && <div>Attention : {_.attention}</div>} */}
    //         <div>{_.address_line_1}</div>
    //         {_.address_line_2 && <div>{_.address_line_2}</div>}
    //         <div>
    //           <span>{_.city && `${_.city}, `}</span>
    //           <span>{_.state && `${_.state}, `}</span>
    //         </div>
    //         <div>
    //           <span>{_.country_region && `${_.country_region} `}</span>
    //           <span>{_.zip_code && ` - ${_.zip_code}.`}</span>
    //         </div>
    //       </Tooltip>
    //     ),
    //   },
    //   {
    //     title: 'Shipping',
    //     dataIndex: 'shippingAddress',
    //     key: 'shippingAddress',
    //     width: 200,
    //     render: (_) => (
    //       <Tooltip title={_.attention}>
    //         <div>{_.address_line_1}</div>
    //         {_.address_line_2 && <div>{_.address_line_2}</div>}
    //         <div>
    //           <span>{_.city && `${_.city}, `}</span>
    //           <span>{_.state && `${_.state}, `}</span>
    //         </div>
    //         <div>
    //           <span>{_.country_region && `${_.country_region}`}</span>
    //           <span>{_.zip_code && ` - ${_.zip_code}.`}</span>
    //         </div>
    //       </Tooltip>
    //     ),
    //   },
    // ],
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 120,
    render: () => (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Button disabled type="primary">
          EDIT
        </Button>
        <div style={{ minHeight: '1em' }} />
        {/* <Button type="primary">CREATE INVOICE</Button> */}
        <Button disabled type="danger">
          DELETE
        </Button>
      </div>
    ),
  },
];

const TableList = ({ dataSource }) => {
  const [fixedTop, setFixedTop] = useState(false);
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      scroll={{ x: 940 }}
      summary={() => (
        <Table.Summary fixed={fixedTop ? 'top' : 'bottom'}>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={2}>
              <Switch
                checkedchild="Fixed Top"
                unCheckedchild="Fixed Top"
                checked={fixedTop}
                onChange={() => {
                  setFixedTop(!fixedTop);
                }}
              />
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} colSpan={3}>
              Scroll Context
            </Table.Summary.Cell>
            <Table.Summary.Cell index={5} colSpan={1}>
              Fix Right
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
      pagination={false}
      sticky={{
        offsetHeader: '64px',
      }}
    />
  );
};

TableList.defaultProps = {
  dataSource: [],
};
TableList.propTypes = {
  dataSource: PropTypes.arrayOf(PropTypes.object),
};

export default TableList;
