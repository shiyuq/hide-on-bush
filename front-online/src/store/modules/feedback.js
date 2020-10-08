import { feedbackService } from '@/api'

const feedbackModule = {
  namespaced: true,
  state: {
    feedbackList: []
  },

  mutations: {
    getFeedbackList (state, feedbackList) {
      state.feedbackList = feedbackList
    }
  },

  actions: {
    async getFeedbackList ({ commit }, options) {
      const feedbackList = await feedbackService.getFeedbackList(options)
      commit('getFeedbackList', feedbackList)
    }
  }
}

export default feedbackModule
