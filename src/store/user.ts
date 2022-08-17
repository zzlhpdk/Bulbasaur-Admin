import { defineStore } from 'pinia'
import { setUserInfo, setToken } from '@/utils/authority'

// 第一个参数是应用程序中 store 的唯一 id
export const userStore: any = defineStore('USER', {
  state: () => {
    return {
      userInfo: {
        nickname: '',
        orgId: '',
        routes: '',
        userId: '',
        avatar: '',
      },
      token: '',
    }
  },
  actions: {
    //将token存进state
    setToken(payload: any) {
      this.token = payload
      //并且进行持久储存，存进session里面
      setToken(payload)
    },
    //将用户信息存进state
    setUser(payload: any) {
      this.userInfo = payload
      // 用户信息存入缓存
      setUserInfo(payload)
    },
  },
})
