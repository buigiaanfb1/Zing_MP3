import React from 'react';
import { useStyles } from './styles';
import Navbar from '../../../components/Navbar/Navbar';
import Main from '../../../components/Main';
import PlayerControls from '../../../components/PlayerControls';
import PlayerQueue from '../../../components/PlayQueue';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../../../history';
import { routesHome } from '../../../routes';
import ClientTemplate from '../index';

const Home = () => {
  // init
  const classes = useStyles();
  const isLaptop = useMediaQuery({ query: '(max-width: 1636px)' });
  const openQueue = useSelector((state) => state.shareStore.openQueue);

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
      <div className={classes.container}>
        <div className={classes.navbar}>
          <Navbar />
        </div>
        <div className={classes.main}>
          <Router history={history}>
            <Switch>{showLayoutClient()}</Switch>
          </Router>
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
    </div>
  );
};

export default Home;
