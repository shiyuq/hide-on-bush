'use strict';

const Controller = require('egg').Controller;

class FeedbackController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx.query); // query 用来拿 url 后面的参数
    const options = ctx.query;
    const data = await ctx.service.feedback.findAll(options);
    const rowData = data.map(item => item.toJSON());

    ctx.status = 200;
    ctx.body = rowData;
  }
}

module.exports = FeedbackController;
