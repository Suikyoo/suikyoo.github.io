import { useState } from 'react';

const InputField = ({label, name, inputType, icon}) => {
    //const [value, setValue] = useState(null);

    return (
        <div className="m-3">
            <p className="m-2 bg-white text-stone-800 text-xs relative top-4 w-12 text-center">{label}</p>
            <div className="flex flex-row items-center justify-center p-2 round border-1 border-stone-300" >
                <input className="ml-3 p-2 w-3/4 round bg-transparent border-none focus:outline-none box-border" name={name} type={inputType} />
                <img src={icon} className="w-7"/>
            </div>
        </div>
    );
}

export default InputField;
