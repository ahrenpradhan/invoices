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

export const formConfig = {
  aboutUserConfig: {
    formLayout: 'horizontal',
    formItemLayout: {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 12,
      },
    },
    buttonItemLayout: {
      wrapperCol: {
        // span: 16,
        offset: 6,
      },
    },
    inputValues: [
      {
        value: 'Customer Type',
        key: 'customer_type',
        defaultValue: 'business',
        type: 'select-single',
        options: [
          {
            title: 'Business',
            value: 'business',
            key: 'business',
          },
          {
            title: 'Single User',
            value: 'single_user',
            key: 'single_user',
          },
        ],
        rules: [
          {
            required: true,
            message: 'test',
          },
        ],
      },
      {
        value: 'Full Name',
        key: 'primary_contact',
        defaultValue: '',
        type: 'input',
        exclude: true,
        alternateParams: (val) => {
          // console.log('alternateParams executed');
          const altParams = {
            single_user: {
              exclude: false,
            },
          };
          return altParams[val] || {};
        },
        // salutation,first name, last name
      },
      {
        value: 'Company Name',
        key: 'company_name',
        defaultValue: '',
        type: 'input',
        rules: [
          {
            required: true,
            message: 'test',
          },
        ],
      },
      {
        value: 'Company Display Name',
        key: 'company_display_name',
        defaultValue: '',
        type: 'input',
        // the name that will be shown
      },
      {
        value: 'Customer Email',
        key: 'customer_email',
        defaultValue: '',
        type: 'input',
        rules: [
          {
            required: true,
            message: 'test',
          },
        ],
      },
      {
        value: 'Phone Number',
        key: 'phone_number',
        defaultValue: '',
        type: 'input',
        rules: [
          {
            required: true,
            message: 'test',
          },
        ],
        // work phone , mobile
      },
      {
        value: 'Designation',
        key: 'designation',
        defaultValue: '',
        type: 'input',
      },
      {
        value: 'Department',
        key: 'department',
        defaultValue: '',
        type: 'input',
      },
      {
        value: 'Website',
        key: 'website',
        defaultValue: '',
        type: 'input',
      },
    ],
  },
  addressConfig: {
    formItemLayout: {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 14,
      },
    },
    inputValues: [
      // {
      //   value: 'Customer Type',
      //   key: 'customer_type',
      //   defaultValue: 'business',
      //   type: 'select-single',
      //   options: [
      //     {
      //       title: 'Business',
      //       value: 'business',
      //       key: 'business',
      //     },
      //     {
      //       title: 'Single User',
      //       value: 'single_user',
      //       key: 'single_user',
      //     },
      //   ],
      //   rules: [
      //     {
      //       required: true,
      //       message: 'test',
      //     },
      //   ],
      // },
      {
        value: 'Attention',
        key: 'attention',
        defaultValue: '',
        type: 'input',
      },
      {
        value: 'Country / Region',
        key: 'country_region',
        defaultValue: '',
        type: 'input',
        rules: [
          {
            required: true,
            message: 'test',
          },
        ],
      },
      {
        value: 'Address Line 1',
        key: 'address_line_1',
        defaultValue: '',
        type: 'input',
        rules: [
          {
            required: true,
            message: 'test',
          },
        ],
      },
      {
        value: 'Address Line 2',
        key: 'address_line_2',
        defaultValue: '',
        type: 'input',
      },
      {
        value: 'City',
        key: 'city',
        defaultValue: '',
        type: 'input',
        rules: [
          {
            required: true,
            message: 'test',
          },
        ],
      },
      {
        value: 'State',
        key: 'state',
        defaultValue: '',
        type: 'input',
        rules: [
          {
            required: true,
            message: 'test',
          },
        ],
      },
      {
        value: 'Zip code',
        key: 'zip_code',
        defaultValue: '',
        type: 'input',
        rules: [
          {
            required: true,
            message: 'test',
          },
        ],
      },
      {
        value: 'Phone',
        key: 'phone',
        defaultValue: '',
        type: 'input',
        rules: [
          {
            required: true,
            message: 'test',
          },
        ],
      },
      {
        value: 'Fax',
        key: 'fax',
        defaultValue: '',
        type: 'input',
      },
    ],
  },
};

export const randomConst = 'hahaha';
