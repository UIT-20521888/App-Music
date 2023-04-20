const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../pkg/database/sequelize');

class user extends Model {}

user.init({
    UserName: 
    {
        type: DataTypes.STRING,
        length: 255,
        allowNull: false,
        unique: true,
    },
    Password:
    {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    Email:
    {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    Sodt:
    {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }

},
{
    sequelize,
    modelName: "User"

})

module.exports = user