import { useState } from 'react';

const InputField = ({name, inputType, img}) => {
    //const [value, setValue] = useState(null);

    const divStyle = {
        display: 'flex',
        width: '90%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        padding: '0.5em'

    };

    const iconStyle = {
        flexGrow: '1',
        marginRight: '0.5em'
    };

    const inputStyle = {
        all: 'unset',
<<<<<<< HEAD
        width: '70%',
        flexGrow: '5'
=======
        width: '100%',
        flexGrow: '10'
>>>>>>> ab41be3b71717e44b20b599ec2da1848f19acabe
    };

    return (

        <label className="outline" style={divStyle}>
            <img src={img} className="icon" style={iconStyle}/>
            <input name={name} type={inputType} style={inputStyle}/>
        </label>
    );
}

export default InputField;
