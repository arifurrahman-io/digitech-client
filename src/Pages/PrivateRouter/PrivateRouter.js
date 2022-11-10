import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRouter = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div>
            <button type="button" disabled>
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                </svg>
                Loading...
            </button>
        </div>
    }

    if (!user) {
        return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRouter;