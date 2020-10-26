'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.resources('feedback', '/api/v1/feedback', controller.feedback);
  router.resources('user', '/api/v1/user', controller.user);
};
