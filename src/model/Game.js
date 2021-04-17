const { Model, DataTypes } = require('sequelize');

class Game extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            price: DataTypes.DOUBLE,
        },{
            sequelize
        })
    }
}

module.exports = Game;