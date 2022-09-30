import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routesConfig from 'routes/routes-config';

const router = createBrowserRouter(routesConfig);

const App = () => <RouterProvider router={router} />;

export default App;
