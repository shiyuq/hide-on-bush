'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // console.log(ctx.query); // query 用来拿 url 后面的参数
    const body = await ctx.service.home.get();
    ctx.body = body;
  }
}

module.exports = HomeController;
