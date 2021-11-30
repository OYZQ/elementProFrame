import Cookies from "js-cookie";
export const TOKEN_KEY = 'token'
export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token, 1)
}
export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  if (token) return token
  return false
}
export const removeToken = () => {
  Cookies.remove(TOKEN_KEY)
}
// 权限判断
export const hasPermission = (role, route) => {
  let meta = route.meta
  if (meta && meta.roles) return meta.roles.includes(role)
  return true
}