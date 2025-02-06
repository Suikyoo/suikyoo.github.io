
import {createContext, useContext, useState, useEffect, useRef} from 'react';
import { socket } from '../socket';
import { createRegister, getId } from  '../id';
import { useAuth } from '../auth';

import sendIcon from '../assets/send.svg';

import '../styles/convo.scss';

//there would be a host server on a specific address that 
//is connectible using socket.io

//use "send message" event to update the data inside the server
//and listen for the "send message" event too to listen for updates

const ConvoContext = createContext({});

const ConvoTab = ({name}) => {
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {

        socket.emit("initialize-data", (data) => {
            setMessageList(data);

        });

        socket.on("receive-message", (message) => {

           socket.emit("initialize-data", (data) => {
            setMessageList(data);

           });
 
        });

        socket.on("disconnect", () => {console.log("client disconnected")});

    }, []);

    return (
        <ConvoContext.Provider value={{messageList, setMessageList}}>
            <div className="convo-tab">
                <Head/>
                <Body/>
                <Foot/>
            </div>
        </ConvoContext.Provider>
    )
}

const Head = () => {
    return (
        <div className="head">
            <p className="convo-name">Conversation</p>
        </div>
    )
}

const Body = () => {
    const { messageList } = useContext(ConvoContext);
    return (
        <ul className="body">
            {messageList.map( msg => <Message key={msg.id} message={msg}/>)}
        </ul>
    )
}

const Foot = () => {
    const [userInput, setUserInput] = useState("")
    //used to keep useEffect firing
    const [count, setCount] = useState(0);

    const {messageList, setMessageList} = useContext(ConvoContext);
    const username = sessionStorage.getItem("username");
    const inputRef = useRef();

    const formStyle = {
        width: "100%"
    }
    return (
        <form className="foot" style={formStyle} onSubmit={ e => {

            e.preventDefault();

            //onclick button for inputting chat message
            //create message object that syncs well with the message objects in the server

            let message = {user: username, content: userInput};

            socket.emit("send-message", message, messageList.length);

            setUserInput("");

            inputRef.current.focus();

            }}>
            <input type="text" ref={inputRef} value={userInput} onChange={e => setUserInput(e.target.value)}/>
            <button type="submit" >
                <img src={sendIcon} className="icon"/>
            </button>

        </form>

                )
}

const Message = ({message}) => {
    let username = sessionStorage.getItem("username");
    return (

        <li key={message.id} className={"message" + " " + (message.user === username ? "right" : "left") } style={{width: String(message.content.length * 0.9) + "em"}}>
            <p>{`${message.user}: ` + message.content}</p>
        </li>
    )

}
export default ConvoTab;
