// 公共接口封装
import request from '@/utils/request'

export function loginPath(data: any) {
  return request({
    method: 'POST',
    url: '/ower-watch/oauth/token',
    data,
  })
}
// 获取用户信息
export async function userInfoPath() {
  return request('/ower-watch/oauth/userInfo')
}
