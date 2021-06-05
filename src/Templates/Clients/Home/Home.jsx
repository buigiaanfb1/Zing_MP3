import React, { useEffect } from 'react';
import { useStyles } from './styles';
import Navbar from '../../../components/Navbar/Navbar';
import Main from '../../../components/Main';
import PlayerControls from '../../../components/PlayerControls';
import PlayerQueue from '../../../components/PlayQueue';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../../../history';
import { routesHome } from '../../../routes';
import ClientTemplate from '../index';
import { getCollection } from '../../../firebase/tools/getCollection';
import { FETCH_ALBUMS } from './modules/constants';

const Home = () => {
  // init
  const classes = useStyles();
  const isLaptop = useMediaQuery({ query: '(max-width: 1636px)' });
  const openQueue = useSelector((state) => state.shareStore.openQueue);
  const dispatch = useDispatch();

  const fetchAlbums = async () => {
    const res = await getCollection('albums');
    dispatch({
      type: FETCH_ALBUMS,
      payload: res,
    });
  };

  //
  useEffect(() => {
    fetchAlbums();
  });

  // render Route
  const showLayoutClient = () => {
    if (routesHome && routesHome.length > 0) {
      return routesHome.map((route, index) => {
        return (
          <ClientTemplate
            exact
            path={route.path}
            component={route.component}
            key={index}
          />
        );
      });
    }
  };

  // return
  return (
    <div className={classes.bgColor}>
      <Router history={history}>
        <div className={classes.container}>
          <div className={classes.navbar}>
            <Navbar />
          </div>
          <div className={classes.main}>
            <Switch>{showLayoutClient()}</Switch>
          </div>
        </div>
        <div
          className={`${classes.playerQueue} ${
            isLaptop ? (openQueue ? classes.openQueueLaptop : '') : ''
          }`}
        >
          <PlayerQueue />
        </div>
        <PlayerControls />
      </Router>
    </div>
  );
};

export default Home;
