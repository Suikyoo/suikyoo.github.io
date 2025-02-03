
import { useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';

import userNameImg from '../assets/username.svg';
import passwordImg from '../assets/password.svg';

import InputField from '../components/InputField';

import '../styles/login.scss';

const Login = () => {

    const formStyle = {
<<<<<<< HEAD
        margin: 'auto',
        width: '70%',
        maxWidth: '375px',
        boxSizing: 'border-box',
        padding: '1em',
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
=======
        width: '80%',
        height: '80vh',
        boxSizing: 'border-box',
        padding: '1em'
>>>>>>> ab41be3b71717e44b20b599ec2da1848f19acabe


    };

    const buttonStyle = {
        width: '8em',
        margin: 'auto',
        marginTop: '3em',
        padding: '0.5em',
        margin: '1em'
    };

    const [success, setSuccess] = useState(false);


    return (
        <>
<<<<<<< HEAD
            <form className="round bg-secondary" style={formStyle} onSubmit={ async (e) => {
=======
            <form className="round bg-primary" style={formStyle}onSubmit={ async (e) => {
                
                e.preventDefault();
>>>>>>> ab41be3b71717e44b20b599ec2da1848f19acabe

                const formData = new FormData(e.target);

                const username = formData.get("username");
                const password = formData.get("password");

                console.log("uwu");
                console.log(username, password);
                

                }}>

                <label className="text">
                <p>username:</p>
                <InputField name="username" inputType="text" img={userNameImg}/>
                </label>

                <label className="text">
                <p>password:</p>
                <InputField name="password" inputType="password" img={passwordImg}/>
                </label>

                <p className="hidden"></p>

                <button className="text bg-primary round" style={buttonStyle} type="submit">Log in</button>


            </form>
        </>
    );
}

export default Login;
