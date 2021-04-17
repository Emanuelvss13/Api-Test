'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('game', {

       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
       },

       title: {
         type: Sequelize.STRING,
         allowNull: false,
       },

       price: {
         type: Sequelize.DOUBLE,
         allowNull: false,
       }
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('game');

  }
};
