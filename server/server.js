const path = require('path')
const express = require('express')

const sessions = require('./routes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/sessions', sessions)

module.exports = server
