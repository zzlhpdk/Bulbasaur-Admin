import request from '@/utils/request';

export function loginPath(data: any) {
  return request({
    method: 'POST',
    url: '/bulbasaur/oauth/token',
    data
  });
}
// 获取用户信息
export async function userInfoPath() {
  return request('/bulbasaur/oauth/userInfo');
}
