const sequelize = require('./sequelize');
const user = require('../../models/associations')
const database = 
{
    connection: async()=>{
        try
        {
            await sequelize.authenticate()
            console.log('Authentication successful')
        }
        catch (err)
        {
            console.error('Error authent', err)
        }
    },
    creaedatabase: async() => {
        try
        {
            await sequelize.sync( {force: true})
            console.log("All models were synchronized successfully.");
        }
        catch (err)
        {
            console.error('Error syncing', err)
        }
    }
}

module.exports = database