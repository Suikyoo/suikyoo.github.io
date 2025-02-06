
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import userNameImg from '../assets/username.svg';
import passwordImg from '../assets/password.svg';

import InputField from '../components/InputField';

import { useAuth } from '../auth';

const Login = () => {

    const formStyle = {
        margin: 'auto',
        width: '70%',
        maxWidth: '375px',
        boxSizing: 'border-box',
        padding: '1em',
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'


    };

    const buttonStyle = {
        width: '8em',
        marginTop: '3em',
        padding: '0.5em',
        margin: '1em'
    };

    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();
    return (
        <>
            <form className="round bg-secondary" style={formStyle} onSubmit={ async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);

                const username = formData.get("username");
                const password = formData.get("password");

                axios.post('http://localhost:5500/auth/login', {username, password})
                    .then( (res) => {
                        sessionStorage.setItem("success", 1);
                        sessionStorage.setItem("username", username);

                        navigate('/messageapp');
                    })
                    .catch( (err) => {
                        console.log(err.response);
                    });
                

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
