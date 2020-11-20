'use strict';

const Controller = require('egg').Controller;

class AuthController extends Controller {
  async login() {
    const { ctx } = this;
    const { email, password } = ctx.request.body;

    const options = { email, password };
    const rule = {
      email: { type: 'string' },
      password: { type: 'string' },
    };
    ctx.validate(rule, options);

    const data = await ctx.service.auth.login(options);
    ctx.status = 200;
    ctx.body = data;
  }
}

module.exports = AuthController;
