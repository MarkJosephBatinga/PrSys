import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import MainRoutes from './routes/routers';
import {theme} from "./theme";
import {  createBrowserRouter, RouterProvider} from 'react-router-dom';

// createBrowserRouter, RouterProvider,
const router = createBrowserRouter(MainRoutes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
);
