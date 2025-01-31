
const { createServer } = require('http');
const { Server } = require('socket.io');

const PORT = 5500;
const httpServer = createServer();

const io = new Server(httpServer, {
    cors: {
        origin: ["http://localhost:5173", "http://localhost:5173"],
        methods: ["GET", "POST"]
    }
});


let data = [
    {
        "user": "Suikyoo",
        "content": "the quick brown fox jumped over the lazy dog",
        "id": 0
    },
    {
        "user": "Delta",
        "content": "lorem ipsum dolor amet",
        "id": 1
    },
    {
        "user": "Gamma",
        "content": "wubalubadubdub",
        "id": 2
    }

];

//front-end file is generated through the react project,
//a sister directory of the host project



//this is used to catch up on the backlogs chat messages
//i.e, a user has logged in late
io.on("connection", (socket) => {
    console.log(`user: ${socket.id} has connected`);

    socket.on("initialize-data", (callback) => {
        console.log("ahahaha");
        callback(data);

    });
    socket.on("send-message", (content) => {
        socket.broadcast.emit("receive-message", content);
        callback();

    });

    io.on("disconect", (reason) => {
        console.log(reason);
    });

});

//whatym tryna say is, once any client sends a message, 
//the server broadcasts the message to all the other clients.
//and also interacts with itself through a callback function, letting the client know that the message was sent



httpServer.listen(PORT, () => console.log(`Server listening on port: ${PORT}.`));
