
import {useState, useEffect} from 'react'

import { socket } from '../socket'

import sendIcon from '../assets/send.svg'


//there would be a host server on a specific address that 
//is connectible using socket.io

//use "send message" event to update the data inside the server
//and listen for the "send message" event too to listen for updates


const ConvoTab = ({name}) => {

    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        socket.on("connect", () => {
            console.log('ueueueueueueu');
            socket.emit("initialize-data", (data) => {
                console.log("ehe");
                console.log(data, typeof(data));
                setMessageList(data);

            });

        }, []);


        socket.on("disconnect", () => {console.log("client disconnected")});

        return () => {
            socket.off();
        }

    }, []);

    return (
        <div className="convo-tab">
            <Head name={name}/>
            <Body name={name} array={messageList}/>
            <Foot name={name} array={messageList} setArray={setMessageList}/>
        </div>
    )
}

const Head = ({name}) => {
    return (
        <div className="head">
            <p className="convo-name">{name}</p>
        </div>
    )
}

const Body = ({name, array}) => {
    return (
        <ul className="body">
            {array.map( msg => <li key={msg.id}><Message user={msg.user} text={msg.content}/></li>)}
        </ul>
    )
}

const Foot = ({array, setArray}) => {
    const [message, setMessage] = useState("")

    return (
        <div className="foot">
            <input type="text" id="message-input" value={message} onChange={event => setMessage(event.target.value)}/>

            <button onClick={(event) => {
                //onclick button for inputting chat message
            }
                }>
                <img src={sendIcon} className="icon"/>
            </button>

        </div>
    )
}

const Message = ({user, text}) => {
    return (
        <div className={"message" + " " + "left"} style={{width: String(text.length * 0.9) + "em"}}>
            <p>{`user ${user}: ` + text}</p>
        </div>
    )

}
export default ConvoTab
