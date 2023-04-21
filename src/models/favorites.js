const {Sequelize, Model, DataTypes} = require("sequelize")
const sequelize = require("../pkg/database/sequelize")

class favorites extends Model{}

favorites.init({
    DayFavorites:{
        type: DataTypes.DATE,
        defaultValue:DataTypes.NOW,
    }
},{
    sequelize
})

module.exports = favorites