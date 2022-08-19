import { defineStore } from 'pinia';
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
    };
  },
  actions: {
    //将token存进state
    setToken(payload: any) {
      this.token = payload;
    },
    //将用户信息存进state
    setUser(payload: any) {
      this.userInfo = payload;
    },
  },
  // 持久化
  persist: {
    enabled: true,
    strategies: [{ paths: ['userInfo', 'token'] }],
  },
});
