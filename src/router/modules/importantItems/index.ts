import { RouterView, RouteRecordRaw } from 'vue-router'

const importantItems: RouteRecordRaw = {
  path: '/important',
  name: '重要物品管理',
  component: RouterView,
  meta: { title: '重要物品管理' },
  children: [
    {
      path: '/important/blagajnecash',
      name: '款箱钥匙登记簿',
      meta: { title: '款箱钥匙登记簿' },
      component: () => import('@/views/important/blagajnecash/index.vue'),
    },
  ],
}

// path: '/important',
// name: '重要物品管理',
// component: RouterView,
// routes: [
//   {
//     path: 'important/blagajnecash',
//     name: '款箱钥匙登记簿',
//     component: () => import('@/views/important/blagajnecash/index.vue'),
//   },
// {
//   path: '/important/blagajnecash/detail',
//   component: './Important/BlagajneCash/Detail',
//   access: '1447564668817117185',
// },
// {
//   path: '/important/blagajnecashrecord/page',
//   name: '款箱钥匙交接登记簿',
//   icon: 'icon-copyright',
//   component: './Important/BlagajneCashRecord/Page',
//   access: '1447567169016565761',
// },
// {
//   path: '/important/blagajnecashrecord/detail',
//   component: './Important/BlagajneCashRecord/Detail',
//   access: '1447567491940225026',
// },
// {
//   path: '/important/instrument/page',
//   name: '印控仪备用钥匙登记簿',
//   icon: 'icon-copyright',
//   component: './Important/Instrument/Page',
//   access: '1447568786071752705',
// },
// {
//   path: '/important/instrument/created',
//   component: './Important/Instrument/Created',
//   access: '1447569381302210561',
// },
// {
//   path: '/important/instrument/view',
//   component: './Important/Instrument/View',
//   access: '1447569072051982337',
// },
// {
//   path: '/important/instrument/edit',
//   component: './Important/Instrument/Edit',
//   access: '1447569914712821761',
// },
// {
//   path: '/important/instrumentrecord/page',
//   name: '印控仪备用钥匙交接登记簿',
//   icon: 'icon-copyright',
//   component: './Important/InstrumentRecord/Page',
//   access: '1447570541018877953',
// },
// {
//   path: '/important/instrumentrecord/created',
//   component: './Important/InstrumentRecord/Created',
//   access: '1447571509454311425',
// },
// {
//   path: '/important/instrumentrecord/view',
//   component: './Important/InstrumentRecord/View',
//   access: '1447571036609449985',
// },
// {
//   path: '/important/instrumentrecord/edit',
//   component: './Important/InstrumentRecord/Edit',
//   access: '1447571897297408001',
// },
// ],

export default importantItems
