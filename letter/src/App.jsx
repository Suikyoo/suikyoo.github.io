import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import reactLogo from '/assets/react.svg';
import viteLogo from '/vite.svg';
import ConvoTab from '/components/ConvoTab';
import { AuthProvider } from '/auth';

import Home from '/pages/Home';
import Login from '/pages/Login';
import MainPage from '/pages/MainPage';
import MessageApp from '/pages/MessageApp';
import ProtectedRoute from '/components/ProtectedRoute';

import "/styles/style.css";

const App = () => {
    
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes basename='./letter'>
                    <Route path="/" element={<Home/>}/>

                    <Route path="/login" element={<Login/>}/>
                    <Route path="/mainpage" element={<ProtectedRoute><MainPage/></ProtectedRoute>}/>
                    <Route path="/messageapp" element={<ProtectedRoute><MessageApp/></ProtectedRoute>}/>

                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App
