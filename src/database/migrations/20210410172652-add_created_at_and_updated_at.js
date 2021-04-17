'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'game',
      'created_at',
      {
        type: Sequelize.DATE
      }
    )

    await queryInterface.addColumn(
      'game',
      'updated_at',
      {
        type: Sequelize.DATE
      }
    )
  },

  

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'game',
      'created_at',
    )

    await queryInterface.removeColumn(
      'game',
      'updated_at',
    )
  }
};
