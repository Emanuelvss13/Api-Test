const Sequelize = require('sequelize');
const Config = require('../config/index');
const Game = require('../model/Game');

const connection = new Sequelize(Config);
Game.init(connection);

module.exports = connection;