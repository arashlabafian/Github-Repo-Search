import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { persistor } from './store/index';
import { PersistGate } from 'redux-persist/integration/react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loading from './views/components/loading';

const loading = <Loading />;

const Layout = React.lazy(() => import('./containers/Layout'));
const Login = React.lazy(() => import('./views/pages/Login'));
const Page404 = React.lazy(() => import('./views/pages/Page404'));

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#1f4068',
      main: '#1f4068',
      dark: '#1b1b2f',
      contrastText: '#fff',
    },
    secondary: { light: '#b76965', main: '#191f33', dark: '#9b3134' },
    success: {
      main: '#4caf50',
    },
  },
});

function App() {
  const user = useSelector(state => state.user);
  const authenticated = (
    <Switch>
      <Redirect from='/' to='/search' exact />
      <Route path='/' name='Home' render={props => <Layout {...props} />} />
      <Route exact name='Page 404' render={props => <Page404 {...props} />} />
    </Switch>
  );
  const unAuthenticated = (
    <Switch>
      <Redirect from='/' to='login' exact />
      <Route
        exact
        path='/login'
        name='Login Page'
        render={props => <Login {...props} />}
      />
      <Route exact name='Page 404' render={props => <Page404 {...props} />} />
    </Switch>
  );
  return (
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <ToastContainer
            position='bottom-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <React.Suspense fallback={loading}>
            {user.id ? authenticated : unAuthenticated}
          </React.Suspense>
          <ToastContainer />
        </ThemeProvider>
      </PersistGate>
    </BrowserRouter>
  );
}

export default App;
