const sequelize = require("../pkg/database/sequelize")
const {Sequelize, Model, DataTypes} = require('sequelize')

class profileArtist extends Model{}

profileArtist.init({
    NameArtist: 
    {
        type: DataTypes.TEXT,
        allowNull:false,
    },
    Pseudonym:{
        type: DataTypes.TEXT,
        allowNull:true,
    }
},{
    sequelize
})

module.exports = profileArtist