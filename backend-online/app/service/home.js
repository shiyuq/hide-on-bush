'use strict';

const Service = require('egg').Service;

class TopicService extends Service {
  constructor(ctx) {
    super(ctx);
    this.root = 'https://cnodejs.org/api/v1';
  }

  async get() {
    return {
      name: 'syq',
    };
  }
}

module.exports = TopicService;
