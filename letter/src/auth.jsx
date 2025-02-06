import {useContext, createContext, useState} from 'react';

const AuthContext = createContext({username: "", success: false});

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}
const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    );

}

export {useAuth, AuthProvider};
