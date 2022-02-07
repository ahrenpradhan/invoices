import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  // VideoCameraOutlined,
  // UploadOutlined,
  DashboardOutlined,
  FormOutlined,
  UserOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

const getIcon = (iconName) => {
  const TEMP_OBJ = {
    desktopOutlined: <DesktopOutlined />,
    formOutlined: <FormOutlined />,
    settingOutlined: <SettingOutlined />,
    dashboardOutlined: <DashboardOutlined />,
    userOutlined: <UserOutlined />,
    pieChartOutlined: <PieChartOutlined />,
    fileOutlined: <FileOutlined />,
    teamOutlined: <TeamOutlined />,
    default: <DesktopOutlined />,
  };
  return iconName === false ? null : TEMP_OBJ[iconName] || TEMP_OBJ['default'];
};

const sideMenuItem = ({ key, title, custom_key, iconName, link }) => {
  return link.length ? (
    <Menu.Item key={key || custom_key || title} icon={getIcon(iconName)}>
      <Link to={link}>{title}</Link>
    </Menu.Item>
  ) : (
    <Menu.Item key={key || custom_key || title} icon={getIcon(iconName)}>
      {title}
    </Menu.Item>
  );
};

const sideMenuSubMenu = ({ key, title, children, iconName }) => {
  return (
    <SubMenu
      key={key || title.toLowerCase()}
      icon={getIcon(iconName)}
      title={title}
    >
      {children
        .map((_) => ({
          ..._,
          custom_key: title + '-' + _.title,
        }))
        .map((_) =>
          Array.isArray(_.children)
            ? sideMenuSubMenu({ ..._ })
            : sideMenuItem({ ..._ })
        )}
    </SubMenu>
  );
};

const SideMenu = ({ collapsed = false, sidebarConfig = [] }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ height: '100vh', position: 'sticky', top: '0' }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']}>
        {Array.isArray(sidebarConfig) ? (
          sidebarConfig
            .map((_) => ({
              ..._,
              custom_key: _.title,
            }))
            .map((_) =>
              Array.isArray(_.children)
                ? sideMenuSubMenu({ ..._ })
                : sideMenuItem({ ..._ })
            )
        ) : (
          <></>
        )}
      </Menu>
    </Sider>
  );
};

export default SideMenu;
