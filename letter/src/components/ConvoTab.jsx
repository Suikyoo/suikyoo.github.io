
import {createContext, useContext, useState, useEffect, useRef} from 'react';
import { socket } from '../socket';
import { createRegister, getId } from  '../id';
import { useAuth } from '../auth';

import sendIcon from '../assets/send.svg';


//there would be a host server on a specific address that 
//is connectible using socket.io

//use "send message" event to update the data inside the server
//and listen for the "send message" event too to listen for updates

const ConvoContext = createContext({});

const ConvoTab = ({name}) => {
    const [messageList, setMessageList] = useState([]);
    const online = useRef(false);
    const timeoutId = useRef(null);

    useEffect(() => {

        socket.emit("initialize-data", (data) => {

            setMessageList(data);

        });

        socket.on("receive-message", (message) => {

            socket.emit("initialize-data", (data) => {
                setMessageList(data);
            });

        });

        socket.on("pong", () => {
            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }

            online.current = true;

            setTimeout(() => {
                online.current = false;
            }, 2000);

        });

        socket.on("disconnect", () => {console.log("client disconnected")});

        setInterval(() => {
            socket.emit("ping");
        }, 2000);

    }, []);

    return (
        <ConvoContext.Provider value={{online, messageList, setMessageList}}>
            <div className="max-w-md w-5/6 flex flex-col bg-gray-100">
                <Head/>
                <Body/>
                <Foot/>
            </div>
        </ConvoContext.Provider>
    )
}

const Head = () => {
    let username = sessionStorage.getItem("username");
    let {online} = useContext(ConvoContext);
    console.log(username, online);
    return (
        <div className={"bg-" + (username.toLowerCase() == "tulips" ? "yellow" : "rose") + "-100 " + "rounded-t-3xl border-box p-4 mt-8 flex justify-start items-center"}>
            <p>{username.toLowerCase() == "tulips" ? "Lilies" : "Tulips"}</p>
            <div hidden className={"mx-2 rounded-full w-2 h-2 bg-green-300 " + (!online ? "hidden" : "")}>
                </div>
        </div>
    )
}

const Body = () => {
    const { messageList } = useContext(ConvoContext);
    return (
        <ul className="overflow-y-auto shadow-2xl h-100 border-box p-5 flex flex-col">
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
        <form className="bg-teal-100 rounded-3xl border-box p-4 mt-8 shadow-2xl flex flex-row" style={formStyle} onSubmit={ e => {

            e.preventDefault();

            //onclick button for inputting chat message
            //create message object that syncs well with the message objects in the server

            let message = {user: username, content: userInput};

            socket.emit("send-message", message, messageList.length);

            setUserInput("");

            inputRef.current.focus();

            }}>
            <input className="ml-5 grow-50 focus:outline-0" type="text" ref={inputRef} value={userInput} onChange={e => setUserInput(e.target.value)}/>
            <button className="grow-5" type="submit" >
                <img src={sendIcon} className="icon"/>
            </button>
        </form>

                )
}

const Message = ({message}) => {
    let username = sessionStorage.getItem("username");
    return (

        <li key={message.id} className={"my-2 box-border p-2 max-w-4/5 self-" + (message.user === username ? "end rounded-t-2xl rounded-l-2xl " : "start rounded-t-2xl rounded-r-2xl ") + (message.user.toLowerCase() == "tulips" ? "bg-rose-100" : "bg-yellow-100")} style={{width: String(message.content.length * 0.9) + "em"}}>{`${message.user}: ` + message.content}</li>
    )

}
export default ConvoTab;
