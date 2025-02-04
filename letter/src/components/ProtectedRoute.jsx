import { useNavigate, Outlet } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../auth';



const ProtectedRoute = () => {

    const { auth } = useContext(AuthContext);

    const navigate = useNavigate();
    if (!auth.sucess) {
        navigate('/');
    }

    return ( <Outlet/> );
}

export default ProtectedRoute;
