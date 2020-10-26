'use strict';

const Controller = require('egg').Controller;
const _ = require('lodash');

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    console.log('ctx.query', ctx.query); // query 用来拿 url 后面的参数
    console.log('ctx.params', ctx.params); // params 用来获取 url 中的参数
    console.log('ctx.request.body', ctx.request.body); // request.body 获取 post 的数据
    const options = ctx.query;
    const data = await ctx.service.user.findAll(options);
    const rowData = data.map(item => item.toJSON());

    ctx.status = 200;
    ctx.body = rowData;
  }

  async show() {
    const { ctx } = this;
    const { id } = ctx.params;
    const options = { id };
    const rule = {
      id: { type: 'string' },
    };
    ctx.validate(rule, options);
    const data = await ctx.service.user.findOne(id, _.omit(options, [ 'id' ]));

    ctx.status = 200;
    ctx.body = data;
  }
}

module.exports = UserController;
