import { createAuthInstance } from './general'
import config from '@/config/api.config'

const baseUrl = config.customerServiceAdmin

const getFeedbackList = async () => {
  const { data } = await createAuthInstance(baseUrl).get('/api/v1/feedback')
  return data
}

export const feedbackService = {
  getFeedbackList
}
