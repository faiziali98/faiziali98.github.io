'use strict';

const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Game = require('./game.js')
const app = express()
const server = http.createServer(app)
const io = socketio(server)
const port = 8080

io.on('connection', onConnection)
app.use(express.static(__dirname))
server.listen(port, () => console.log('Ready to work!'))