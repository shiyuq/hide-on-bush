'use strict';

const Service = require('egg').Service;

class AuthService extends Service {
  async login(options) {
    const { ctx } = this;
    const { email } = options;
    const userInfo = await ctx.model.User.findOne({ email });

    return userInfo;
  }
}

module.exports = AuthService;
