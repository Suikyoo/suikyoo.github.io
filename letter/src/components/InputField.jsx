import { useState } from 'react';

const InputField = ({name, inputType, img}) => {
    //const [value, setValue] = useState(null);

    const divStyle = {
        padding: '0.3em',
        display: 'flex',
        width: '90%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    };

    const iconStyle = {
        flexGrow: '1',
        marginRight: '0.5em'
    };

    const inputStyle = {
        all: 'unset',
        width: '70%',
        flexGrow: '5'
    };

    return (

        <label className="outline" style={divStyle}>
            <img src={img} className="icon" style={iconStyle}/>
            <input name={name} type={inputType} style={inputStyle}/>
        </label>
    );
}

export default InputField;
