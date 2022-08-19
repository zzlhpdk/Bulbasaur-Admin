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
export const routerFormat = (routers: any) => {
  const modules = import.meta.glob('../views/**/**.vue');
  const newRoutes = routers.map((item: any) => {
    if (!item.children) {
      const route = {
        path: item.path,
        name: item.name,
        meta: item.meta,
        component: item.component
          ? modules[`../views${item.component}/index.vue`]
          : RouterView,
      };
      // 生成路由组件
      router.addRoute('Bulbasaur', route);
      //把路由组件加入router
      router.options.routes.push(route);
    } else {
      routerFormat(item.children);
    }
  });
  return newRoutes;
};

// 设置激活路由/标签 状态
export const setActiveState = (value: any) => {
  const tabPane = tabPaneStore();
  const layout = layoutStore();
  layout.setDefaultMenu(value);
  tabPane.setActivePan(value);
};
