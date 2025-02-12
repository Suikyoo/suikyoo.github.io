
const {getId, createRegister, updateRegister } = require('../id.js');
const {getMessages, addMessage} = require('./messageController');

createRegister("id");
updateRegister("id", getMessages().length);

const initializeMessageListener = (io, socket) => {

    socket.on("initialize-data", (callback) => {
        callback(getMessages());
    });
}

const sendMessageListener = (io, socket) => {

    socket.on("send-message", (message, index, callback) => {
        let msg = { ...message, id: getId("id")};
        addMessage(msg);
        io.emit("receive-message", msg);

    });
}

const disconnectListener = (io, socket) => {
    socket.on("disconnect", (reason) => {
        console.log(reason);
    });
}

const pingListener = (io, socket) => {
    socket.on("ping", () => {
        io.emit("pong");

    });
}

module.exports = {initializeMessageListener, sendMessageListener, disconnectListener, pingListener};
