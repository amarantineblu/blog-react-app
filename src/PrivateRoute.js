import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import React from 'react';


const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const isAuthenticated = localStorage.getItem('token'); // Check if token exists in localStorage
  return isAuthenticated || user ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;