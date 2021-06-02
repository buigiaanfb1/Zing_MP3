import Main from '../components/Main';
import MyMusic from '../Templates/Clients/MyMusic';

export const routesHome = [
  {
    exact: true,
    path: '/',
    component: Main,
  },
  {
    exact: true,
    path: '/mymusic',
    component: MyMusic,
  },
];
