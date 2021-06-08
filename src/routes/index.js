import Main from '../components/Main';
import Home from '../Templates/Admin/Home';
import Album from '../Templates/Clients/Album';
import MyMusic from '../Templates/Clients/MyMusic';
import Test from '../Templates/Test';

export const routesHome = [
  {
    exact: true,
    path: '/admin',
    component: Home,
  },
  {
    exact: true,
    path: '/album/:id',
    component: Album,
  },
  {
    exact: true,
    path: '/test',
    component: Test,
  },
  {
    exact: false,
    path: '/',
    component: Main,
  },
];

export const privateRoutes = [
  {
    exact: true,
    path: '/mymusic',
    component: MyMusic,
  },
];
