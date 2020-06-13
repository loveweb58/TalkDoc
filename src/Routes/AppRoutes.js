import React from 'react';
const DefaultLayout = React.lazy(() => import('containers/DefaultLayout'));
const Login = React.lazy(() => import('views/auth/Login'));
const Signup = React.lazy(() => import('views/auth/Signup'));

const AppRoutes = [
  // Login/signup routes
  {
    path: '/login',
    name: 'Login',
    component: Login,
    private: false,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    private: false,
  },
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    private: true,
  },
  // Fallback redirect
  { redirect: true, path: '/', to: '/', name: 'Home' },
];

export default AppRoutes;
