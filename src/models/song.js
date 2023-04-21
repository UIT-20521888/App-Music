const {Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = require('../pkg/database/sequelize')

class song extends Model{}

song.init({
    rankings:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    NameSong: {
        type:DataTypes.STRING,
        unique: true,
        allowNull:false
    },
    srcsong: {
        type:DataTypes.STRING,
        unique: true,
        allowNull:false
    },
    srctext: {
        type:DataTypes.STRING,
        unique: true,
        allowNull:false
    }
},
{
    sequelize
})

module.exports = song