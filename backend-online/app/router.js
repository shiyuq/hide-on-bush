'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.feedback);

  // 用户留言
  router.resources('feedback', '/api/v1/feedback', controller.feedback);

  // 用户信息
  router.resources('user', '/api/v1/user', controller.user);

  // 登录注册
  router.post('auth', '/api/v1/login', controller.auth.login);
};
