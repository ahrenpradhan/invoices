import React, { useState } from 'react';
import { Layout } from 'antd';
import MainHeader from './mainHeader';
import Routes from 'renderer/routes/mainRoutes';

const { Header, Content } = Layout;

const MainLayout = ({ collapsed, handleToggle }) => {
  return (
    <Layout className="site-layout">
      <MainHeader collapsed={collapsed} handleToggle={handleToggle} />
      <Content>
        <Routes />
      </Content>
    </Layout>
  );
};

export default MainLayout;
