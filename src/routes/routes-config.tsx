import ReduxCounter from 'components/ReduxCounter';
import HomePage from 'pages/HomePage';
import { Navigate } from 'react-router-dom';

const routesConfig = [
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '/counter',
    element: <ReduxCounter />
  },
  {
    path: '*',
    element: <Navigate replace to='/home' />
  }
];

export default routesConfig;
