const {Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = require('../pkg/database/sequelize')

class userType extends Model {}

userType.init({
    TypeName: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
},
{
    sequelize,
})

module.exports = userType