import React from 'react'
import Root from './root';
import ErrorPage from '../components/error/index';
import Dashboard from '../components/dashboard/dashboard';
import UserDash from './userdash';
import CheckEmail from '../components/checkemail/checkEmail';
import NewProc from '../components/newprocurement/body';

const MainRoutes = [
    {
      path: '/checkemail',
      element: <CheckEmail />,
      errorElement: <ErrorPage />,
      
    },
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      
    },
    {
      path: '/user/',
      element: <UserDash />,
      errorElement: <ErrorPage />,
      children: [
        {
        path: 'dashboard',
        element: <Dashboard />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'newproc',
        element: <NewProc />,
        errorElement: <ErrorPage />,
      },
    ]
    }
  ]

  export default MainRoutes;