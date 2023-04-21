const {Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = require('../pkg/database/sequelize')

class sharemusic extends Model{}

sharemusic.init({
    DayShare: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
},{
    sequelize
})

module.exports = sharemusic