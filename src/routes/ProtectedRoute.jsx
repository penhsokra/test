import React, { lazy } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import ErrorBoundary from './ErrorBoundary';
import Loadable from 'components/Loadable';
const Loading = Loadable(lazy(() => import('pages/extra-pages/loading')));

const ProtectedRoute = ({ children, redirectToHomeIfLoggedIn = false }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user && redirectToHomeIfLoggedIn) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  if (!user && !redirectToHomeIfLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <ErrorBoundary>{children}</ErrorBoundary>;
};

export default ProtectedRoute;
