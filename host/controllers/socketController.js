
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
    socket.on("disconect", (reason) => {
        console.log(reason);
    });
}

module.exports = {initializeMessageListener, sendMessageListener, disconnectListener};
