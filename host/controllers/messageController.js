

const messages = {
    data : require("../models/data.json")
}

//get
const getMessages = () => {
    return messages.data;
}

const setMessages = (data) => {
    messages.data = data;
}

const addMessage = (message) => {
    messages.data = [... messages.data, message];

}



module.exports = {getMessages, addMessage};
