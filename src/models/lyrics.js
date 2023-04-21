const {Sequelize, Model, DataTypes}  =  require('sequelize')
const sequelize = require('sequelize')

class lyrics extends Model{}

lyrics.init({
    NameLyric:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    DayCreate:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
},{
    sequelize
})

module.exports = lyrics