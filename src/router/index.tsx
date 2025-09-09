import { lazy } from 'react';

const general = lazy(() =>
  import('../ui/pages/general/general').then((module) => {
    return { default: module.general };
  }),
);
const Home = lazy(() =>
  import('../ui/pages/Home/Home').then((module) => {
    return { default: module.Home };
  }),
);

export const publicRoutes = [
  { path: '/general', component: general },
  { path: '/Home', component: Home },

  { path: '*', component: general },
];
