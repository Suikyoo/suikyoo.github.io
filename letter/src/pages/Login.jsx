
import { useRef } from 'react';

import userNameImg from '../assets/username.svg';
import passwordImg from '../assets/password.svg';

import InputField from '../components/InputField';

const Login = () => {

    const userNameInput = useRef('');
    const passwordInput = useRef('');

    const formStyle = {
        width: '70%',
        maxWidth: '375px'

    };

    return (
        <>
            <form style={formStyle}onSubmit={ async (e) => {
                
                e.preventDefault();

                const formData = new FormData(e.target);

                const username = formData.get("username");
                const password = formData.get("password");


                

                }}>

                <label className="text">
                <p>username:</p>
                <InputField name="username" inputType="text" img={userNameImg}/>
                </label>

                <label className="text">
                <p>password:</p>
                <InputField name="username" inputType="text" img={userNameImg}/>
                </label>

            </form>
        </>
    );
}

export default Login;
