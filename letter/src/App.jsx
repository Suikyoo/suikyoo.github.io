import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ConvoTab from './components/ConvoTab';
import { AuthProvider } from './auth';

import Home from './pages/Home';
import Login from './pages/Login';
import MessageApp from './pages/MessageApp';

import "./styles/app.scss";

const App = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/messageapp" element={<MessageApp/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
