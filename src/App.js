import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const loading = <div>loading</div>;

const Layout = React.lazy(() => import('./containers/Layout'));
const Login = React.lazy(() => import('./views/pages/Login'));
const Page404 = React.lazy(() => import('./views/pages/Page404'));
const Page500 = React.lazy(() => import('./views/pages/Page500'));

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            exact
            path='/login'
            name='Login Page'
            render={props => <Login {...props} />}
          />
          <Route
            exact
            path='/404'
            name='Page 404'
            render={props => <Page404 {...props} />}
          />
          <Route
            exact
            path='/500'
            name='Page 500'
            render={props => <Page500 {...props} />}
          />
          <Route path='/' name='Home' render={props => <Layout {...props} />} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
