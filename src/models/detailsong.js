const {Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = require('../pkg/database/sequelize')

class detailsong extends Model{}

detailsong.init({
},{
    sequelize
})

module.exports = detailsong