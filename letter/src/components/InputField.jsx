import { useState } from 'react';

const InputField = ({name, inputType, img}) => {
    //const [value, setValue] = useState(null);

    const divStyle = {
        padding: '0.3em',
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    };

    const iconStyle = {
        flexGrow: '1'
    };

    const inputStyle = {
        all: 'unset',
        width: '20%',
        flexGrow: '10'
    };

    return (

        <div className="outline" style={divStyle}>
            <img src={img} className="icon" style={iconStyle}/>
            <input name={name} type={inputType} style={inputStyle}/>
        </div>
    );
}

export default InputField;
