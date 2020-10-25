import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loading from '../views/components/loading';
import Page404 from '../views/pages/Page404';

// routes config
import routes from '../routes';

const loading = <Loading />;

const Content = () => {
  return (
    <main>
      <Suspense fallback={loading}>
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => <route.component {...props} />}
                />
              )
            );
          })}
          <Route
            path='/'
            name='Home'
            render={props => <Page404 {...props} />}
          />
        </Switch>
      </Suspense>
    </main>
  );
};

export default React.memo(Content);
