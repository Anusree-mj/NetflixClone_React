import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }:any) => {
    const { user } = useAuth();
    if (!user) {
        return <Navigate to={'/'} />
    } else {
        return children;
    }

}

export default ProtectedRoute
