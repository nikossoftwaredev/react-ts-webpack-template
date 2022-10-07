import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routesConfig from 'routes/routes-config';
import { store } from 'redux/store';

const router = createBrowserRouter(routesConfig);

const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

export default App;
