const express = require('express')
const morgan = require('morgan')

const database = require('./src/pkg/database/dataConnected')
const { connect } = require('http2')
//-----------------------------------------
const app = express()

app.use(morgan('combined'))

// data connect
database.connection()

app.get('/',(req, res, next) =>
{
    res.send("Hellwword")
})

app.listen(3000, (err, res) =>{
    console.log("Hello, world!")
})