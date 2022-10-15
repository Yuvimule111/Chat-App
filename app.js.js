const express = require('express');
const app = express();
const http = require('http').Server(app); // Binding express to http server

// Atttach htttp server to the socket.io
const io = require('socket.io')(http)

/**
 * Socket.IO needs to be attached to the http server
 */

/**
 * I would like to create a two way communication between
 * Client ( Browser ) and the server
 * 
 * socket.io 
 */
app.get("/hello", (req, res) => {
    console.log(__dirname + "/views/")
})