'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Feedback = app.model.define('feedback', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    feedback: {
      type: STRING(256),
      allowNull: false,
    },

    name: {
      type: STRING(256),
      allowNull: false,
    },
  });

  return Feedback;
};
