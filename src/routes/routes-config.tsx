import HomePage from 'pages/HomePage';
import { Navigate } from 'react-router-dom';

const routesConfig = [
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '*',
    element: <Navigate replace to='/home' />
  }
];

export default routesConfig;
