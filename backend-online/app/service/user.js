'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async findAll(options) {
    const { ctx } = this;
    const { limit = 10, offset = 0 } = options;
    const query = { limit, offset };
    const userList = await ctx.model.User.findAll(query);

    return userList;
  }

  async findOne(id, options) {
    const { ctx } = this;
    const query = { ...options, where: { id } };

    const user = await ctx.model.User.findOne(query);
    if (!user) {
      ctx.throw(404, 'user not found');
    }

    const rawData = user.toJSON();
    return rawData;
  }
}

module.exports = UserService;
