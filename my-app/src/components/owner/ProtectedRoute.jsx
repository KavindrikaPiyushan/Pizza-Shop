import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    // If user is not logged in, redirect to login page
    return <Navigate to="/login" />;
  }

  if (user.role !== 'owner') {
    // If user is not an owner, redirect to a default page or the customer dashboard
    return <Navigate to="/customer-dashboard" />;
  }

  return children; // Allow access to the page if the user is an owner
};

export default ProtectedRoute;
