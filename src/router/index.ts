import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 进度条样式
import { getToken, getUserInfo } from '@/utils/authority'
import { setActiveState, routerFormat } from '@/utils/func'
import { tabPaneStore } from '@/store/tabPane' //标签store

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'overWatch',
    component: Layout,
    redirect: '/home',
    meta: { title: '妙蛙种子管理系统' },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页' },
      },
      {
        path: '/:catchAll(.*)',
        name: 'noPermission',
        component: () => import('@/views/error-page/401.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录' },
  },
  // {
  //   path: '/:catchAll(.*)',
  //   name: 'notFind',
  //   component: () => import('@/views/error-page/404.vue'),
  // },
]

const router = createRouter({
  history: createWebHashHistory(), //路由模式
  routes,
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const token = getToken()
  const userInfo = getUserInfo()
  const componentRoutes = router.options.routes // 当前组件路由数量
  // 设置页面title
  document.title = (to.meta.title as string) || '妙蛙种子管理系统'
  // 没有登录
  if (!token) {
    // 如果去登录页，放行
    if (to.name === 'login') {
      next()
    }
    // 如果去其他页，先去登录页，然后redirect拼接要去的页面。
    else {
      //未登录想去别的页面（除登录页外），跳转到登录后点过的那个页面
      next(`/login?redirect=${to.path}`)
    }
  }
  // 已经登录
  else {
    //用户登录了还想去登录页
    if (to.path === '/login') {
      // 发行
      next()
    }
    // 登录了，还想去其他页面
    else {
      // 如果只有原始两个路由组件，则要根据路由表，重新添加新的路由组件
      if (componentRoutes.length < 3) {
        //添加路由组件方法
        routerFormat(userInfo.routes)
        //添加完成后，重新进入，这时候，componentRoutes.length大于2，则从else里面完成。
        next(to.path)
      } else {
        // 设置菜单/标签 激活状态
        setActiveState(to.fullPath)
        //新增标签页
        tabPaneStore().addTabPanes({
          name: to.name,
          label: to.meta.title,
          key: to.fullPath,
        })
        next()
      }
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
export default router
