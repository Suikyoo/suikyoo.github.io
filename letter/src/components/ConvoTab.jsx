
import { useState } from 'react'

import sendIcon from '../assets/send.svg'



const ConvoTab = ({name}) => {

    const [messageList, setMessageList] = useState([{messageId: 0, text: "ehehehehehe", alignment: "left"}])

    return (
            <div className="convo-tab">
                <Head name={name}/>
                <Body array={messageList}/>
                <Foot array={messageList} setArray={setMessageList}/>
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

const Body = ({array}) => {
    return (
        <ul className="body">
            {array.map( msg => <li key={msg.messageId}><Message text={msg.text} alignment={msg.alignment}/></li>)}
        </ul>
    )
}

const Foot = ({array, setArray}) => {
    const [message, setMessage] = useState("")

    return (
        <div className="foot">
            <input type="text" value={message} onChange={event => setMessage(event.target.value)}/>

            <button type="button" onClick={() => {
                setArray(array.concat([{messageId: array[array.length - 1].messageId + 1, text: message, alignment: "left"}]))
                setMessage("");
            }
                }>
                <img src={sendIcon} className="icon"/>
            </button>

        </div>
    )
}

const Message = ({text, alignment}) => {
    return (
        <div className={"message" + " " + alignment} style={{width: String(text.length * 0.9) + "em"}}>
            <p>{text}</p>
        </div>
    )

}
export default ConvoTab
