import Cookies from 'js-cookie'
// 设置cookies
export const setCookie = (name, value, days) => {
  let $days = days || 1;
  Cookies.set(name, value, $days)
}
// 获取cookies
export const getCookie = (name) => {
  let nameCookies = Cookies.get(name)
  if (nameCookies) return nameCookies;
  return false
}
//删除cookies
export const delCookie = (name) => {
  Cookies.remove(name)
}