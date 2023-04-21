const {Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = require('../pkg/database/sequelize')

class followuser extends Model{}

followuser.init({
    DayFollow:{
        type: DataTypes.DATE,
        defaultValue:DataTypes.NOW
    }
},{
    sequelize
})

module.exports = followuser

