export function getToken() {
  return sessionStorage.getItem('TOKEN') || null
}

export function setToken(token: string) {
  sessionStorage.setItem('TOKEN', token)
}
export function getUserInfo() {
  return JSON.parse(sessionStorage.getItem('USER_INFO') || 'null')
}

export function setUserInfo(userInfo: string) {
  sessionStorage.setItem('USER_INFO', JSON.stringify(userInfo))
}
export function getTabPans() {
  return JSON.parse(sessionStorage.getItem('TAB_PANS') || 'null')
}

export function setTabPans(userInfo: string) {
  sessionStorage.setItem('TAB_PANS', JSON.stringify(userInfo))
}
export function removeAll() {
  sessionStorage.removeItem('TOKEN')
  sessionStorage.removeItem('USER_INFO')
  sessionStorage.removeItem('TAB_PANS')
}
