'use strict';

const _ = require('lodash');
const Service = require('egg').Service;

class AuthService extends Service {
  async login(options) {
    console.log('options', options);
    const { ctx } = this;
    const { email, password } = options;
    const userInfo = await ctx.model.User.findOne({ where: { email } });
    if (!userInfo) {
      return { status: 'error', msg: '用户未注册' };
    }
    const data = userInfo.toJSON();
    if (data.password !== password) {
      return { status: 'error', msg: '密码输入错误' };
    }

    return _.omit(data, [ 'password' ]);
  }
}

module.exports = AuthService;
