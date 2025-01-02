import Mock from 'mockjs';

export default [
  {
    url: '/api/bulbasaur/oauth/token',
    method: 'post',
    response: ({ body }) => {
      if (body.code === 'admin') {
        return {
          code: 200,
          message: 'ok',
          data: {
            access_token: 'AAABBBCCCDDD111222333444'
          }
        };
      }
      return {
        code: 200,
        message: 'ok',
        data: {
          access_token: Mock.mock('@guid')
        }
      };
    }
  },
  {
    url: '/api/bulbasaur/oauth/userInfo',
    method: 'get',
    response: request => {
      const token = request.headers.token;
      if (token === 'AAABBBCCCDDD111222333444') {
        return {
          code: 200,
          message: 'ok',
          data: {
            userId: Mock.mock('@guid'),
            nickname: Mock.mock('@cname'),
            avatar: 'http://api.btstu.cn/sjtx/api.php',
            routes: [
              {
                path: 'layer',
                name: 'layer',
                meta: {
                  title: '根菜单',
                  icon: 'sort',
                  type: 'catalogue'
                },
                children: [
                  {
                    path: 'layer-1',
                    name: 'layer-1',
                    meta: {
                      title: '1菜单',
                      icon: 'sort',
                      type: 'catalogue'
                    },
                    children: [
                      {
                        path: 'layer-1-1',
                        name: 'layer-1-1',
                        component: '/layer/layer-1/layer-1-1',
                        meta: {
                          title: '1-1菜单',
                          icon: 'sort',
                          type: 'menu'
                        }
                      },
                      {
                        path: 'layer-1-2',
                        name: 'layer-1-2',
                        component: '/layer/layer-1/layer-1-2',
                        meta: {
                          title: '1-2菜单',
                          icon: 'sort',
                          type: 'button'
                        }
                      }
                    ]
                  },
                  {
                    path: 'layer-2',
                    name: 'layer-2',
                    meta: {
                      title: '2菜单',
                      icon: 'sort',
                      type: 'catalogue'
                    },
                    children: [
                      {
                        path: 'layer-2-1',
                        name: 'layer-2-1',
                        component: '/layer/layer-2/layer-2-1',
                        meta: {
                          title: '2-1列表页',
                          icon: 'sort',
                          type: 'menu'
                        }
                      },
                      {
                        path: 'layer-2-1-detail',
                        name: 'layer-2-1-detail',
                        component: '/layer/layer-2/layer-2-1-detail',
                        meta: {
                          title: '2-1详情页',
                          icon: 'sort',
                          type: 'button',
                          breadcrumbPath:
                            '/layer/layer-2/layer-2-1/layer-2-1-detail'
                        }
                      },
                      {
                        path: 'layer-2-2',
                        name: 'layer-2-2',
                        meta: {
                          title: '2-2菜单',
                          icon: 'sort',
                          type: 'catalogue'
                        },
                        children: [
                          {
                            path: 'layer-2-2-1',
                            name: 'layer-2-2-1',
                            component: '/layer/layer-2/layer-2-2/layer-2-2-1',
                            meta: {
                              title: '2-2-1菜单',
                              icon: 'sort',
                              type: 'menu'
                            }
                          },
                          {
                            path: 'layer-2-2-2',
                            name: 'layer-2-2-2',
                            component: '/layer/layer-2/layer-2-2/layer-2-2-2',
                            meta: {
                              title: '2-2-2菜单',
                              icon: 'sort',
                              type: 'menu'
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                path: 'system',
                name: 'system',
                meta: {
                  title: '系统管理',
                  icon: 'Setting',
                  type: 'catalogue',
                  fullpath: '/system'
                },
                children: [
                  {
                    path: 'menu',
                    name: 'menu',
                    component: '/system/menu',
                    meta: {
                      title: '菜单管理',
                      icon: 'List',
                      type: 'menu',
                      fullpath: '/system/menu'
                    }
                  },
                  {
                    path: 'user',
                    name: 'user',
                    component: '/system/user',
                    meta: {
                      title: '用户管理',
                      icon: 'User',
                      type: 'menu'
                    }
                  },
                  {
                    path: 'role',
                    name: 'role',
                    component: '/system/role',
                    meta: {
                      title: '角色管理',
                      icon: 'View',
                      type: 'menu'
                    }
                  }
                ]
              },
              {
                path: 'singleMenu',
                name: 'singleMenu',
                component: '/singleMenu',
                meta: {
                  title: '单独菜单',
                  icon: 'List',
                  type: 'menu',
                  fullpath: '/singleMenu'
                }
              }
            ]
          }
        };
      } else {
        return {
          code: 200,
          message: 'ok',
          data: {
            userId: Mock.mock('@guid'),
            nickname: Mock.mock('@cname'),
            avatar: 'http://api.btstu.cn/sjtx/api.php',
            routes: [
              {
                path: 'layer',
                name: 'layer',
                meta: {
                  title: '根菜单',
                  icon: 'sort',
                  type: 'catalogue'
                },
                children: [
                  {
                    path: 'layer-1',
                    name: 'layer-1',
                    meta: {
                      title: '1菜单',
                      icon: 'sort',
                      type: 'catalogue'
                    },
                    children: [
                      {
                        path: 'layer-1-1',
                        name: 'layer-1-1',
                        component: '/layer/layer-1/layer-1-1',
                        meta: {
                          title: '1-1菜单',
                          icon: 'sort',
                          type: 'menu'
                        }
                      },
                      {
                        path: 'layer-1-2',
                        name: 'layer-1-2',
                        component: '/layer/layer-1/layer-1-2',
                        meta: {
                          title: '1-2菜单',
                          icon: 'sort',
                          type: 'button'
                        }
                      }
                    ]
                  },
                  {
                    path: 'layer-2',
                    name: 'layer-2',
                    meta: {
                      title: '2菜单',
                      icon: 'sort',
                      type: 'catalogue'
                    },
                    children: [
                      {
                        path: 'layer-2-1',
                        name: 'layer-2-1',
                        component: '/layer/layer-2/layer-2-1',
                        meta: {
                          title: '2-1列表页',
                          icon: 'sort',
                          type: 'menu'
                        }
                      },
                      {
                        path: 'layer-2-1-detail',
                        name: 'layer-2-1-detail',
                        component: '/layer/layer-2/layer-2-1-detail',
                        meta: {
                          title: '2-1详情页',
                          icon: 'sort',
                          type: 'button',
                          breadcrumbPath:
                            '/layer/layer-2/layer-2-1/layer-2-1-detail'
                        }
                      },
                      {
                        path: 'layer-2-2',
                        name: 'layer-2-2',
                        meta: {
                          title: '2-2菜单',
                          icon: 'sort',
                          type: 'catalogue'
                        },
                        children: [
                          {
                            path: 'layer-2-2-1',
                            name: 'layer-2-2-1',
                            component: '/layer/layer-2/layer-2-2/layer-2-2-1',
                            meta: {
                              title: '2-2-1菜单',
                              icon: 'sort',
                              type: 'menu'
                            }
                          },
                          {
                            path: 'layer-2-2-2',
                            name: 'layer-2-2-2',
                            component: '/layer/layer-2/layer-2-2/layer-2-2-2',
                            meta: {
                              title: '2-2-2菜单',
                              icon: 'sort',
                              type: 'menu'
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        };
      }
    }
  }
];
