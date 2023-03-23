import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import ErrorPage from './components/error/index';
import Dashboard from './components/dashboard/dashboard';
import CheckEmail from './components/checkemail/checkEmail';
import {theme} from "./theme";
import {  createBrowserRouter, RouterProvider} from 'react-router-dom';

// createBrowserRouter, RouterProvider,
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    
  },
  {
    path: '/checkemail',
    element: <CheckEmail />,
    errorElement: <ErrorPage />,
    
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
);
