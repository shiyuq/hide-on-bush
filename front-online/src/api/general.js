import _ from 'lodash'
import axios from 'axios'
import * as uuid from 'uuid'
import notification from 'ant-design-vue/es/notification'

import store from '../store'
import { getToken } from './auth'
import { ApiError } from '@/utils/error'

const okayHttpStatuses = [
  200,
  201,
  204,
  304
]

const errorParser = async response => {
  const { status, data } = response
  if (_.some(okayHttpStatuses, s => s === status)) {
    return response
  }
  if (status === 403) {
    notification.error({
      message: 'Forbidden',
      description: data.errorMessage
    })
    return Promise.reject(new ApiError('Forbidden', { isHandled: true, status }))
  }
  if (status === 401) {
    const token = getToken()
    notification.error({
      message: '身份认证错误',
      description: '身份认证已失效，即将返回登录'
    })
    if (token) {
      store.dispatch('Logout').then(() => {
        setTimeout(() => {
          window.location.reload()
        }, 1500)
      })
    }
    return Promise.reject(new ApiError('Unauthorized', { isHandled: true, status }))
  }
  const errorMessage = (data && data.errorMessage) ? data.errorMessage : 'Unknown Network Error'
  return Promise.reject(new ApiError(errorMessage, { isHandled: false, status }))
}

export const createInstance = (baseUrl, authenticated) => {
  const timeout = 5000000
  const headers = {
    'x-tracking-id': uuid.v4()
  }
  if (authenticated) {
    headers['x-auth-key'] = 'Bearer ' + getToken()
  }
  const instance = axios.create({
    baseURL: baseUrl,
    timeout,
    headers,
    validateStatus: () => true
  })
  instance.interceptors.response.use(errorParser)
  return instance
}

export const createAuthInstance = (baseUrl) => createInstance(baseUrl, true)
