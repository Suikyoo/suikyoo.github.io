
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import userNameImg from '../assets/username.svg';
import passwordImg from '../assets/password.svg';


import InputField from '../components/InputField';

import { useAuth } from '../auth';

const Login = () => {

    const [success, setSuccess] = useState(false);
    const [status, setStatus] = useState({text: "", color: "green", hidden: true})
    const navigate = useNavigate();
    return (
        <div className="h-full w-full flex flex-col items-center justify-center bg-stone-95 z-1">
            <div className="rounded-full bg-yellow-100 w-96  h-96 z-1 translate-x-1/3 translate-y-1/2 absolute blur-xs"></div>
            <div className="rounded-full bg-rose-300 w-48  h-48 z-1 -translate-x-4/5 -translate-y-4/5 absolute blur-xs"></div>
            <p className="text-3xl font-bold my-3 z-2 text-stone-800">Who u??</p>
            <form className="h-2/3 flex bg-white flex-col items-center justify-center w-3/4 p-6 round shadow-xl shadow-stone-400 outline-offset-20 outline-stone-500 max-w-sm z-2" onSubmit={ async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);

                const username = formData.get("username");
                const password = formData.get("password");

                const BASE_URL = "https://message-app-host.onrender.com";

                if (e.nativeEvent.submitter.id == "login") {
                    axios.post( `${BASE_URL}/auth/login`, {username, password})
                        .then( (res) => {
                            sessionStorage.setItem("success", 1);
                            sessionStorage.setItem("username", username);

                            setStatus({text: "", color: "green", hidden: true});
                            navigate('/messageapp');
                        })
                        .catch( (err) => {
                            setStatus({text: err.response.data, color: "red", hidden: false})
                        });
                }
                
                else {
                    axios.post(`${BASE_URL}/auth/signup`, {username, password})
                        .then( (res) => {
                            setStatus({text: res.data, color: "green", hidden: false});

                        })
                        .catch( (err) => {
                            setStatus({text: err.response.data, color: "red", hidden: false});
                            
                        });

                }
                

                }}>

                <InputField label="username" name="username" inputType="text" icon={userNameImg}/>
                <InputField label="password" name="password" inputType="password" icon={passwordImg}/>


                <button type="submit" id="login" className="m-3 p-2 bg-stone-800 text-stone-200 w-3/4 round">Log in</button>
                <button type="submit" id="signup" className="m-3 p-2 bg-stone-800 text-stone-200 w-3/4 round">Sign up</button>

                {!status.hidden ? <p style={{color: status.color}}>{status.text}</p> : <></>}
            </form>
        </div>
    );
}

export default Login;
