export const sidebar_config = {
  menu: [
    {
      title: 'Dashboard',
      link: '/dashboard',
      iconName: 'dashboardOutlined',
    },
    {
      title: 'Invoice',
      iconName: 'formOutlined',
      children: [
        {
          title: 'Create',
          link: '/invoice/create',
          iconName: false,
        },
        {
          title: 'View',
          link: '/invoice/view',
          iconName: false,
        },
      ],
    },
    {
      title: 'Customer',
      iconName: 'userOutlined',
      children: [
        {
          title: 'Create',
          link: '/customer/create',
          iconName: false,
        },
        {
          title: 'View',
          link: '/customer/view',
          iconName: false,
        },
      ],
    },
    {
      title: 'Settings',
      link: '/settings',
      iconName: 'settingOutlined',
    },
  ],
  collapsed: false,
};
