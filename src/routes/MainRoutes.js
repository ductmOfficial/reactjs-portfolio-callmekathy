import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

const Homepage = Loadable(lazy(() => import('views/homepage')));
const NotFound = Loadable(lazy(() => import('views/errors/NotFound')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <Homepage />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
};

export default MainRoutes;
