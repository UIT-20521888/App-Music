const {Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = require('../pkg/database/sequelize')

class playmusic extends Model{}

playmusic.init({
    TimePlayer:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    DayPlay:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue:DataTypes.NOW
    }
},{
    sequelize
})

module.exports = playmusic