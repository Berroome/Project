// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const savedSecret = localStorage.getItem('adminSecret');

    // If there is no secret saved in storage, redirect to the login page.
    if (!savedSecret) {
        return <Navigate to="/login" replace />;
    }

    // If there is a secret, show the dashboard.
    // The backend will do the real check to see if the secret is correct.
    return children;
};

export default ProtectedRoute;