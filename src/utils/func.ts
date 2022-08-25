import { RouterView } from 'vue-router';
import router from '@/router';
import { tabPaneStore } from '@/store/tabPane'; //标签store
import { layoutStore } from '@/store/layout'; //layout store

// 深拷贝
export const cloneDeep = (data: any) => {
  //判断data 类型，定义newData类型
  const newData: any = Array.isArray(data) ? [] : {};
  // 如果是对象，遍历key和value，如果是数组，遍历Index和value
  for (const key in data) {
    //判断每一个value是否也是引用类型
    if (data[key] && typeof data[key] === 'object') {
      // 如果value 还是引用类型，就再次递归
      newData[key] = cloneDeep(data[key]);
    }
    // 如果不是引用类型，则进行赋值
    else {
      newData[key] = data[key];
    }
  }
  return newData;
};

// 路由处理  type ===catalogue 菜单目录  menu  菜单  button 按钮菜单
export const routerFormat = (routers: any, parentName = 'Bulbasaur') => {
  const modules = import.meta.glob('../views/**/**.vue');
  routers.forEach((item: any) => {
    const route = {
      ...item,
      component:
        item.meta.type !== 'catalogue'
          ? modules[`../views${item.component}/index.vue`]
          : RouterView,
    };
    // 路由表里添加路由  https://router.vuejs.org/zh/guide/essentials/nested-routes.html#%E5%B5%8C%E5%A5%97%E7%9A%84%E5%91%BD%E5%90%8D%E8%B7%AF%E7%94%B1
    router.addRoute(parentName, route);
    // 路由数量里添加路由，用于路由守卫根据路由数量判断是否重新加载路由
    router.options.routes.push(route);
    if (item.children) {
      routerFormat(item.children, item.name);
    }
  });
};

// 设置激活路由/标签 状态
export const setActiveState = (value: any) => {
  const { setActivePan } = tabPaneStore();
  const { setDefaultMenu } = layoutStore();
  setActivePan(value);
  setDefaultMenu(value);
};
