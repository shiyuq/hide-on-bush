'use strict';

const _ = require('lodash');
const Service = require('egg').Service;

class AuthService extends Service {
  async login(options) {
    const { ctx, app } = this;
    const { email, password } = options;
    const userInfo = await ctx.model.User.findOne({ where: { email } });
    if (!userInfo) {
      return { status: 'error', msg: '用户未注册' };
    }
    const data = userInfo.toJSON();
    if (data.password !== password) {
      return { status: 'error', msg: '密码输入错误' };
    }

    const token = app.jwt.sign(_.pick(data, [ 'id', 'email' ]), app.config.jwt.secret);
    return { token, status: 'success' };
  }
}

module.exports = AuthService;
