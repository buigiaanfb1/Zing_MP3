import Main from '../components/Main';
import MyMusic from '../Templates/Clients/MyMusic';
import Test from '../Templates/Test';

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
  {
    exact: true,
    path: '/test',
    component: Test,
  },
];
