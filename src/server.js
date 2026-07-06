require('dotenv').config()
const express = require('express')  // commonjs
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

// import express from 'express'    // es modules

const app = express()   // app express
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

// config template engine
configViewEngine(app);


// khai bao route
app.use('/v1', webRoutes)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
