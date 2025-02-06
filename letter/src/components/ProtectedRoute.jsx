import { useNavigate, Outlet } from 'react-router';
import { useEffect } from 'react';
import { useAuth } from '../auth';



const ProtectedRoute = ({children}) => {

    const navigate = useNavigate();

    useEffect( () => {
        let success = sessionStorage.getItem("success");

        if (!success) {
            navigate('/');
        }
    }, [])

    return ( 
        <>
            {children}
        </>   
    );
}

export default ProtectedRoute;
