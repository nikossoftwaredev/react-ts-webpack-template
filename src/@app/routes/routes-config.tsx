import AppMenu from '@app/components/AppMenu';
import ReduxCounter from '@app/components/ReduxCounter';
import HomePage from '@app/pages/HomePage';
import { Navigate, RouteObject } from 'react-router-dom';

const routesConfig: RouteObject[] = [
  {
    path: '/menu',
    element: <AppMenu />
  },
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
