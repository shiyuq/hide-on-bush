'use strict';

const Service = require('egg').Service;

class FeedbackService extends Service {
  async findAll(options) {
    const { ctx } = this;
    const { limit = 10, offset = 0 } = options;
    const query = { limit, offset };
    const feedbackList = await ctx.model.Feedback.findAll(query);

    return feedbackList;
  }
}

module.exports = FeedbackService;
