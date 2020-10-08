import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

const cookieDomainName = process.env.VUE_APP_COOKIE_DOMAIN_NAME
const accessToken = 'AuthenticationToken'

const homePage = process.env.VUE_APP_HOMEPAGE_ROOT_URL || 'https://www.symboisis.icu'

export const getToken = () => {
  const cookieToken = Cookies.get(accessToken)
  return cookieToken
}

export const setToken = (token) => {
  if (cookieDomainName) {
    Cookies.set(accessToken, token, { path: '/', domain: cookieDomainName })
  } else {
    Cookies.set(accessToken, token)
  }
}

export const removeToken = () => {
  if (cookieDomainName) {
    Cookies.remove(accessToken, { path: '/', domain: cookieDomainName })
  } else {
    Cookies.remove(accessToken)
  }
}

export const redirectToLogin = () => {
  window.location.href = `${homePage}/user/login?redirect=${window.location.origin}`
}

export const decodeToken = () => {
  const token = getToken()
  if (token) return jwt.decode(token)
}

export const redirectToHomePage = () => {
  window.location.href = homePage
}
