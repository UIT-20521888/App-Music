const sequelize = require('./sequelize');

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
    }
}

module.exports = database