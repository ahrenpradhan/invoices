import React from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Routes from 'renderer/routes/headerRoutes';
const { Header, Content } = Layout;

const MainHeader = ({ collapsed = false, handleToggle = () => {} }) => {
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        position: 'sticky',
        top: '0',
        zIndex: '10',
        display: 'flex',
      }}
    >
      <div>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'trigger',
            onClick: handleToggle,
          }
        )}
      </div>
      <div style={{ flex: 1 }}>
        <Routes />
      </div>
    </Header>
  );
};

export default MainHeader;
