
const express = require('express');
const io = require('socket.io');
const app = express();

const http = createServer(app);
const socket = io(http);

const socket = require

let accounts = [
    "Suikyoo": 
]

let data = [
    {
        "user": "Suikyoo",
        "message": "the quick brown fox jumped over the lazy dog",
        "id": 0
    },
    {
        "user": "Delta",
        "message": "lorem ipsum dolor amet",
        "id": 1
    },
    {
        "user": "Gamma",
        "message": "wubalubadubdub",
        "id": 2
    }

];

//front-end file is generated through the react project,
//a sister directory of the host project



//this is used to catch up on the backlogs chat messages
//i.e, a user has logged in late
socket.on("connect", () => {
    //I forgot suss
    return notes
});

//whatym tryna say is, once any client sends a message, 
//the server broadcasts the message to all the other clients.

socket.on("send message", (content) => {
    //idk man 
    socket.emit("send message" , content);
});
