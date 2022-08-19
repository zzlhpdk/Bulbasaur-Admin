let routes = [
  {
    path: '/layer',
    name: 'Layer',
    meta: {
      title: '层级嵌套',
      icon: 'Sort',
      type: 'catalogue',
    },
    children: [
      {
        path: '/layer-1',
        name: 'Layer_1',
        meta: {
          title: '层级1',
          icon: 'Sort',
          type: 'menu',
        },
        children: [
          {
            path: '/layer1-1',
            name: 'Layer_1_1',
            component: '/layer/layer-1/layer-1-1',
            meta: {
              title: '层级1-1',
              icon: 'Sort',
              type: 'menu',
            },
          },
          {
            path: '/layer1-2',
            name: 'Layer_1_2',
            component: '/layer/layer-1/layer-1-2',
            meta: {
              title: '层级1-2',
              icon: 'Sort',
              type: 'button',
            },
          },
        ],
      },
      {
        path: '/layer-2',
        name: 'Layer_2',
        meta: {
          title: '层级2',
          icon: 'Sort',
          type: 'catalogue',
        },
        children: [
          {
            path: '/layer2-1',
            name: 'Layer_2_1',
            component: '/layer/layer-2/layer-2-1',
            meta: {
              title: '层级2-1',
              icon: 'Sort',
              type: 'menu',
            },
          },
          {
            path: '/layer2-2',
            name: 'Layer_2_2',
            component: '/layer/layer-2/layer-2-2',
            meta: {
              title: '层级2-2',
              icon: 'Sort',
              type: 'menu',
            },
          },
        ],
      },
    ],
  },
  {
    path: '/system',
    name: 'system',
    meta: {
      title: '系统管理',
      icon: 'Setting',
      type: 'catalogue',
    },
    children: [
      {
        path: '/menu',
        name: 'Menu',
        component: '/system/menu',
        meta: {
          title: '菜单管理',
          icon: 'Menu',
          type: 'menu',
        },
      },
    ],
  },
];
