import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const layoutStore: any = defineStore('LAYOUT', {
  state: () => {
    return {
      collapse: false,
      defaultActive: '/home',
    }
  },
  actions: {
    setCollapse() {
      this.collapse = !this.collapse
    },
    setDefaultMenu(payload: any) {
      this.defaultActive = payload
    },
  },
})
