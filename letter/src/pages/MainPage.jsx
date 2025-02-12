
import { useNavigate } from 'react-router-dom';

import ConvoTab from '../components/ConvoTab';

import collage from '../assets/collage-0.jpg';
import collage1 from '../assets/collage-1.jpg';
import collage2 from '../assets/collage-2.jpg';
import collage3 from '../assets/collage-3.jpg';
import collage4 from '../assets/collage-4.jpg';
import collage5 from '../assets/collage-5.jpg';
import collage6 from '../assets/collage-6.jpg';
import collage7 from '../assets/collage-7.jpg';
import collage8 from '../assets/collage-8.jpg';
import collage9 from '../assets/collage-9.jpg';

import Blob from '../assets/blob-0.svg';
import Blob1 from '../assets/blob-1.svg';

import Wave1 from '../assets/wave-1.svg';
import Wave2 from '../assets/wave-2.svg';

import Peak from '../assets/peak-0.svg';
import Peak1 from '../assets/peak-1.svg';

const MainPage = () => {
    const navigate = useNavigate();
    return (
        <div className=" w-full flex flex-col items-center justify-start bg-teal-50">
            <div className=" max-w-md my-24">
                <img src={Wave1} className="scale-x-[-1] scale-y-[-1] translate-y-1"/>
                <div className="bg-rose-500 flex flex-col items-center box-border">
                    <p className="text-sm italic bold text-teal-50">words aren't enough to describe you</p>
                </div>
                <img src={Wave1}/>
            </div>

            <div className="max-w-md flex flex-col items-center bg-teal-300">

                <img src={Peak1}/>
                <img src={collage2} className="z-2"/>
                <p className="z-2 text-center text-sm my-4 text-italic italic bold text-teal-800">pictures don't capture your smiles the way my eyes do</p>
                <img src={collage3} className="z-2 translate-y-1"/>
                <img src={Peak1} className="scale-y-[-1] w-full translate-y-1"/>

            </div>

             <div className="max-w-md w-full flex flex-col items-center justify-end p-2 box-border">

                 <img src={Peak1} className="w-full absolute z-1"/>

                 <div className="w-full flex flex-col items-center shadow-2xl box-border p-8 mb-24 bg-white round z-2">
                     <p className="p-2 rounded-t-xl rounded-l-xl grow-1 w-full m-4 text-right text-center text-sm text-italic italic bold text-teal-900 w-full border-1 border-dashed">In a crowd of millions, </p>
                     <img src={collage8} className="grow-10 w-full object-cover w-56 rounded-3xl"/>

                     <p className="p-2 rounded-t-xl rounded-r-xl grow-1 w-full m-4 text-left text-center text-sm text-italic italic bold text-teal-900 w-full border-1 border-dashed">only for one person<br/> will I turn this head of mine</p>
                     <img src={collage9} className="grow-10 w-full object-cover w-56 rounded-3xl"/>

                     <button onClick={(e) => {navigate('/messageapp')}} className="bg-rose-500 round p-2 w-3/4 text-teal-50 m-12">so anyways,</button>
                 </div>

            </div>


   
        </div>

    );
}

export default MainPage;
