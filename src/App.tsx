import routesConfig from 'routes/routes-config';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from 'redux-app/store';
import NavigationDrawer from 'components/NavigationDrawer';
import ErrorBoundary from 'components/core/ErrorBoundary';

const router = createBrowserRouter(routesConfig);

const App = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <CssBaseline />
      <NavigationDrawer />
      <RouterProvider router={router} />
    </ErrorBoundary>
  </Provider>
);

export default App;
