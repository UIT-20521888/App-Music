const express = require('express')
const morgan = require('morgan')

const database = require('./src/pkg/database/dataConnected')
const { connect } = require('http2')
//-----------------------------------------
const app = express()

app.use(morgan('combined'))

// data connect
database.connection()
database.creaedatabase()

app.get('/',(req, res, next) =>
{
    res.send("Hellwword")
})
// async function create()
// {
//     await User.sync({ force: true });
//     console.log("The table for the User model was just (re)created!");
// }
// create()

app.listen(3000, (err, res) =>{
    console.log("Hello, world!")
})