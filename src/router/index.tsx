import { lazy } from 'react';

const Home = lazy(() =>
  import('../ui/pages/Home/Home').then((module) => {
    return { default: module.Home };
  }),
);
const About = lazy(() =>
  import('../ui/pages/About/About').then((module) => {
    return { default: module.About };
  }),
);
const Projects = lazy(() =>
  import('../ui/pages/Projects/Projects').then((module) => {
    return { default: module.Projects };
  }),
);
const Skills = lazy(() =>
  import('../ui/pages/Skills/Skills').then((module) => {
    return { default: module.Skills };
  }),
);
const Contact = lazy(() =>
  import('../ui/pages/Contact/Contact').then((module) => {
    return { default: module.Contact };
  }),
);

export const publicRoutes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/skills', component: Skills },
  { path: '/contact', component: Contact },

  { path: '*', component: Home },
];
