const {Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = require('../pkg/database/sequelize')

class commnent extends Model{}

commnent.init({

},{
    sequelize
})

module.exports = commnent