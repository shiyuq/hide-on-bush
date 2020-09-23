'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;
    await queryInterface.createTable('feedback', {
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

      createdAt: {
        type: DATE,
        allowNull: true,
        defaultValue: Sequelize.fn('now'),
      },

      updatedAt: {
        type: DATE,
        allowNull: true,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('feedback');
  },
};
