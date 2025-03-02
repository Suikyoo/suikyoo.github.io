
import {createContext, useContext, useState, useEffect, useRef} from 'react';
import { useNavigate} from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/login');
    }, []);

    return (
        <p>You're Home :)</p>
    );
}

export default Home;
