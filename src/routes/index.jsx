import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';
import MinimalLayout from 'layout/MinimalLayout';
import ProtectedRoute from './ProtectedRoute';

// Lazy loaded components
const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/register')));
const AuthResetPassword = Loadable(lazy(() => import('pages/authentication/resetPwd')));

const NotFound = () => <div>404 Not Found</div>;

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      { path: '/', element: <DashboardDefault /> },
      { path: 'chat', element: <SamplePage /> },
      { path: 'color', element: <Color /> },
      { path: 'dashboard/default', element: <DashboardDefault /> },
      { path: 'sample-page', element: <SamplePage /> },
      { path: 'shadow', element: <Shadow /> },
      { path: 'typography', element: <Typography /> }
    ]
  },
  {
    path: '/',
    element: (
      <ProtectedRoute redirectToHomeIfLoggedIn={true}>
        <MinimalLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'login',
        element: <AuthLogin />
      },
      {
        path: 'reset-password',
        element: <AuthResetPassword />
      },
      {
        path: 'register',
        element: <AuthRegister />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;
