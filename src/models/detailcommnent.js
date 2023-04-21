const {Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = require('../pkg/database/sequelize')

class detailscomment extends Model{}

detailscomment.init({
    Conmment: {
        type:DataTypes.STRING,
        allowNull:false
    },
    
    DayComment: {
        type:DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
},{
    sequelize
})

module.exports = detailscomment