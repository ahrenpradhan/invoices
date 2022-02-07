import React, { useState } from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import SideMenu from './sideMenu';
import MainLayout from './mainLayout';

const { Header, Content } = Layout;

export default function CustomLayout({ sidebarConfig }) {
  const [collapsed, setCollapsed] = useState(sidebarConfig.collapsed);
  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <SideMenu
        sidebarConfig={sidebarConfig.menu || null}
        collapsed={collapsed}
      />
      <MainLayout collapsed={collapsed} handleToggle={handleToggle} />
    </Layout>
  );
}
