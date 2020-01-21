const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

// serve from from our public directory
app.use('/', serveStatic(path.join(__dirname, '/public')))

const port = process.env.PORT || 8080
app.listen(port)
