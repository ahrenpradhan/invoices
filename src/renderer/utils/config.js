export const sidebarConfig = {
  menu: [
    {
      title: 'Dashboard',
      link: '/dashboard',
      iconName: 'dashboardOutlined',
    },
    {
      title: 'Invoice',
      iconName: 'formOutlined',
      child: [
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
      child: [
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

export const randomConst = 'hahaha';
