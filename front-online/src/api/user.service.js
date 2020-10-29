import { createAuthInstance } from './general'
import config from '@/config/api.config'

const baseUrl = config.customerServiceAdmin

const login = async ({ email, password }) => {
  return createAuthInstance(baseUrl).post('/api/v1/login', {
    email,
    password
  })
}

export const userService = {
  login
}
