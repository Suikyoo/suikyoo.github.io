
const {getId, createRegister, updateRegister } = require('../id.js');
const {getMessages, addMessage} = require('./messageController');

createRegister("id");
updateRegister("id", getMessages().length);

const initializeMessageListener = (socket) => {

    socket.on("initialize-data", (callback) => {
        callback(getMessages());
    });
}

const sendMessageListener = (socket) => {

    socket.on("send-message", (message, index, callback) => {
        let msg = { ...message, id: getId("id")};
        addMessage(msg);
        socket.emit("receive-message", msg);

    });
}

const disconnectListener = (socket) => {
    socket.on("disconect", (reason) => {
        console.log(reason);
    });
}

module.exports = {initializeMessageListener, sendMessageListener, disconnectListener};
