import {createContext, useState} from 'react';

const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    );

}

export {AuthContext, AuthProvider};
