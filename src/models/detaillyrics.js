const {Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = require('../pkg/database/sequelize')

class detaillyrics extends Model{}

detaillyrics.init({
    DayAdd:{
        type: DataTypes.DATE,
        defaultValue:DataTypes.NOW
    }
},{
    sequelize
})

module.exports = detaillyrics