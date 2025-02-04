
import {createContext, useContext, useState, useEffect, useRef} from 'react';
import { socket } from '../socket';
import { createRegister, getId } from  '../id';
import { AuthContext } from '../auth';

import sendIcon from '../assets/send.svg';

import '../styles/convo.scss';

//there would be a host server on a specific address that 
//is connectible using socket.io

//use "send message" event to update the data inside the server
//and listen for the "send message" event too to listen for updates

const ConvoContext = createContext({});

const ConvoTab = ({name}) => {
    
    const [messageList, setMessageList] = useState([]);

    //ids that have not been validated by the server
    createRegister("temporary");

    useEffect(() => {
        socket.on("connect", () => {

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
    console.log(typeof(messageList));
    return (
        <ul className="body">
            {messageList.map( msg => <Message key={msg.id} message={msg}/>)}
        </ul>
    )
}

const Foot = () => {
    const [userInput, setUserInput] = useState("")
    const {messageList, setMessageList} = useContext(ConvoContext);
    const {auth} = useContext(AuthContext);
    const inputRef = useRef();

    useEffect(() => {
        socket.on("receive-message", (message) => {
            setMessageList([... messageList, message]);
        });
    });

    return (
        <div className="foot">
            <form onSubmit={ e => {

                e.preventDefault();

                //onclick button for inputting chat message
                //create message object that syncs well with the message objects in the server

                let message = {user: auth.name, content: userInput};

                socket.emit("send-message", message, array.length);

                setUserInput("");

                inputRef.current.focus();

                }}>

                <input type="text" ref={inputRef} value={userInput} onChange={e => setUserInput(e.target.value)}/>

                <button type="submit">
                    <img src={sendIcon} className="icon"/>
                </button>

            </form>

            </div>
                )
}

const Message = ({message}) => {
    const {auth} = useContext(AuthContext);
    return (
        <div className={"message" + " " + (message.user === auth.name ? "right" : "left") } style={{width: String(message.content.length * 0.9) + "em"}}>
            <p>{`${message.user}: ` + message.content}</p>
        </div>
    )

}
export default ConvoTab;
