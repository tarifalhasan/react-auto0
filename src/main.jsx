import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import Layout from './components/Layout';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-ktwlccu77i01zz7e.us.auth0.com"
    clientId="1uIaHGS1HHzzug7XL927ocfE42C3GoA6"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Auth0Provider>
);
