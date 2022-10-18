import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { store } from 'redux-app/store';
import NavigationDrawer from 'components/NavigationDrawer';
import ErrorBoundary from 'components/core/ErrorBoundary';

const App = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <CssBaseline />
      <NavigationDrawer />
    </ErrorBoundary>
  </Provider>
);

export default App;
