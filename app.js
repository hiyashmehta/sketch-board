const express = require('express'); // Access
const socket = require('socket.io');

const app = express(); // initialize and server ready

app.use(express.static('public')); // static files

let port = 3000;
let server = app.listen(port, () => {
    console.log("Listening to port" + port);
})

let io = socket(server);

io.on("connection", (socket) => {
    console.log("made soxket connection");

    // Received data
    socket.on("beginPath", (data) => {
        // New transfer data to all connected computers
        io.sockets.omit("beginPath", data);
    })
})