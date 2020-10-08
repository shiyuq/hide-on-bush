/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1600265834520_6959';

  config.cluster = {
    listen: {
      port: 7001,
    },
  };

  config.cors = {
    origin: 'http://127.0.0.1:9000',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.httpclient = {
    request: {
      timeout: 10 * 60 * 1000,
    },
  };

  config.serverTimeout = 20 * 60 * 1000;

  // configuration for sequelize
  config.sequelize = {
    Sequelize: require('sequelize'),
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'hide-on-bush',
    username: 'postgres',
    password: 'shiyuq',
    define: {
      charset: 'utf8',
      timestamps: true,
      underscored: false,
      freezeTableName: true,
    },
  };

  config.httpclient = {
    request: {
      timeout: 10 * 60 * 1000,
    },
  };

  config.serverTimeout = 20 * 60 * 1000;

  config.bodyParser = {
    jsonLimit: '10mb',
  };

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
