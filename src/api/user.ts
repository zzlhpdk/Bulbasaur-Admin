import request from '@/utils/request'

// 获取用户信息
export async function currentUser() {
  return request('/api/sino-auth/oauth/userInfo')
}
