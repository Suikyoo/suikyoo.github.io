
import ConvoTab from '../components/ConvoTab';
import fs from 'fs';

import collage from '../assets/collage.jpg'

const MessageApp = () => {
    return (
        <div>
            <div className="w-screen h-12 bg-rose-500 z-1"></div>
            <img src={collage} className=" grayscale-100 my-12 z-1"/>
            <div className=" grayscale-100 my-12 z-2 absolute w-12 h-12 bg-black"></div>
        </div>

    );
}

export default MessageApp;
