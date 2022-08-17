import { defineStore } from 'pinia'
import { setTabPans } from '@/utils/authority'
import { setActiveState } from '@/utils/func'
import { ElMessage } from 'element-plus'

import router from '@/router'
// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const tabPaneStore: any = defineStore('TABPANE', {
  state: () => {
    return {
      tabPanes: <any>[],
      activePan: '/home',
    }
  },
  // 新增标签
  actions: {
    setActivePan(payload: any) {
      this.activePan = payload
    },
    addTabPanes(payload: any) {
      if (this.tabPanes.length < 1) {
        this.tabPanes.push(payload)
      } else {
        const newTabPane = this.tabPanes.find(
          (item: any) => item.key === payload.key
        )
        if (!newTabPane) {
          this.tabPanes.push(payload)
        }
      }
      setTabPans(this.tabPanes)
    },
    // 删除标签
    removeTabPanes(payload: any) {
      //标签数大于1的时候
      if (this.tabPanes.length > 1) {
        let nextTab = { key: '', name: '', label: '' }
        this.tabPanes.forEach((item: any, index: number, items: any) => {
          if (item.key === payload) {
            nextTab = items[index + 1] || items[index - 1] // 获取上一个或者下一个标签
          }
        })
        // 设置激活状态
        setActiveState(nextTab.key)
        // 切换到上一个或者下一个标签
        router.push(nextTab.key)
        // 剔除被删除的标签
        this.tabPanes = this.tabPanes.filter(
          (item: any) => item.key !== payload
        )
      } else {
        ElMessage.error('至少保留一个标签')
      }
    },
  },
})
