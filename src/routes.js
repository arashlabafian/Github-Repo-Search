import React from 'react';

const Search = React.lazy(() => import('./views/components/Search/Search'));
const Repositories = React.lazy(() =>
  import('./views/components/Repositories/Repositories')
);

const routes = [
  {
    path: '/search',
    exact: true,
    name: 'Search Repo',
    component: Search,
  },
  {
    path: '/repositories',
    exact: true,
    name: 'Repositories',
    component: Repositories,
  },
];

export default routes;
