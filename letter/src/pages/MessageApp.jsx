
import ConvoTab from '../components/ConvoTab';
import fs from 'fs';

import collage from '../assets/collage.jpg';
import FirstWave from '../assets/wave-1.svg';

const MessageApp = () => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-start bg-rose-50">
            <div className="max-w-sm flex flex-col">
                <div className="w-full h-8 bg-rose-500"></div>
                <div className="flex flex-col items-center justify-center ">
                    <div className="my-4 w-48 h-18 z-1 absolute w-full flex items-center justify-center backdrop-blur-2xs"><p className="text-center text-xl text-italic m-5 italic bold text-white">words aren't enough to describe you</p></div>
                    <img src={collage} className=" grayscale-100 my-12"/>
                </div>
            </div>

            <div className="max-w-sm flex flex-col bg-rose-400">


                <p className="text-center text-lg text-italic italic bold text-white">pictures don't capture your smiles the way my eyes do</p>
            </div>
                
        </div>

    );
}

export default MessageApp;
