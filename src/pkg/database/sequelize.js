const Sequelize = require('sequelize')

const sequelize = new Sequelize("music","root","thai0868339431",
                        {
                            dialect: 'mysql',
                            host: 'localhost'
                        })

module.exports = sequelize