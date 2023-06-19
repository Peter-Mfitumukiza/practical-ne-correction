import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import authService from '../services/authService'; // Import the authService

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = authService.isAuthenticated(); // Check the authentication status

  if(!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children
};

export default ProtectedRoute;