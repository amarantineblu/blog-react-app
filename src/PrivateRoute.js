import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';
import React from 'react';


const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  // const isAuthenticated = localStorage.getItem('token'); // Check if token exists in localStorage
  // return isAuthenticated || user ? children : <Navigate to="/login" replace />;
   if (loading) return <p>Loading (from PrivateRoute)...</p>;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;  
}

export default PrivateRoute;