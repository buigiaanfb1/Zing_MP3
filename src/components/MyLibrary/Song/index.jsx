import React from 'react';
import { useStyles } from './styles';
import queue1 from '../../../assets/images/queue1.jpeg';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { Typography } from '@material-ui/core';

const Song = () => {
  const classes = useStyles();
  return (
    <div className={classes.songs}>
      <div className={classes.songItem}>
        <div className={classes.songNameImgAuthContainer}>
          <img src={queue1} alt="song" />
          <div className={classes.songNameImgAuth}>
            <Typography className={classes.songTitle}>Faded</Typography>
            <Typography className={classes.author}>Author</Typography>
          </div>
        </div>
        <div className={classes.time}>
          <Typography className={classes.timeText}>05:45</Typography>
        </div>
        <div className={classes.tools}>
          <div className={classes.iconContainer}>
            <FavoriteBorderOutlinedIcon className={classes.icon} />
          </div>
          <div className={classes.iconContainer}>
            <MoreHorizOutlinedIcon className={classes.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Song;
