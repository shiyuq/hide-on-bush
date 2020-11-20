'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING, BIGINT, DATE } = Sequelize;
    // create account email
    await queryInterface.createTable('user', {
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
    await queryInterface.dropTable('user');
  },
};
