require('dotenv').config()
const express = require('express')  // commonjs
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web');
const connection = require('./config/database');



// import express from 'express'    // es modules

const app = express()   // app express
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME


// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

// config template engine
configViewEngine(app);


// khai bao route
app.use('/', webRoutes)


// test Connection



// simple query
// connection.query(
//     'SELECT * FROM `Users`',
//     function (err, results, fields) {
//         console.log(">>> results:", results);
//         // console.log(">>>fields:", fields);
//     }
// );

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
