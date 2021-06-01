import React, { useState } from 'react';
import { useStyles } from './styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navbar from '../../../components/Navbar/Navbar';
import Main from '../../../components/Main';
import PlayerControls from '../../../components/PlayerControls';
import PlayerQueue from '../../../components/PlayQueue';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

const Home = () => {
  const classes = useStyles();
  const isLaptop = useMediaQuery({ query: '(max-width: 1636px)' });
  const openQueue = useSelector((state) => state.shareStore.openQueue);
  return (
    <div className={classes.bgColor}>
      <div className={classes.container}>
        <div className={classes.navbar}>
          <Navbar />
        </div>
        <div className={classes.main}>
          <Main />
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
