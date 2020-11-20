'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { STRING, BIGINT } = app.Sequelize;

  const User = app.model.define('user', {
    id: {
      type: BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      field: 'email',
      type: STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      field: 'password',
      type: STRING,
      allowNull: false,
    },
  });

  return User;
};
