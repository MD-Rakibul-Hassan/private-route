import { useContext } from "react"
import { AuthContext } from './../../contexts/context';
import { Navigate } from "react-router-dom";


const Private = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
}

export default Private;