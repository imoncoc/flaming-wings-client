import React from 'react';
import App from '../App';
import Home from '../pages/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../pages/Blog/Blog';
import Login from '../pages/Login/Login';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Register from '../pages/Register/Register';
import ChefDetails from '../pages/Chefs/ChefDetails/ChefDetails';
import PrivateRoutes from './PrivateRoutes';
import AboutPage from '../pages/AboutPage/AboutPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoutes>
            <ChefDetails></ChefDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: '/about',
        element: <AboutPage></AboutPage>
      }
    ],
  },
]);

export default router;