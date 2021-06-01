import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import avatar from '../../assets/images/avatar.png';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';
import { useStyles } from './styles';
import OpenQueue from '../OpenQueue';

import { useMediaQuery } from 'react-responsive';

const PlayerControls = () => {
  const classes = useStyles();
  const isLaptop = useMediaQuery({ query: '(max-width: 1636px)' });

  return (
    <div className={classes.bgColor}>
      <div className={classes.container}>
        <div className={classes.root}>
          <Grid container className={classes.containerLeftCenterRight}>
            <Grid item xs={3}>
              <div className={classes.left}>
                <div className={classes.containerAvatar}>
                  <img src={avatar} className={classes.avatar} />
                </div>
                <div className={classes.containerText}>
                  <Typography>Sing me to sleep</Typography>
                  <Typography variant="caption">Alan Walker</Typography>
                </div>
                <div className={classes.tools}>
                  <FavoriteBorderOutlinedIcon className={classes.icon} />
                  <MoreHorizOutlinedIcon className={classes.icon} />
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.center}>
                <div className={classes.player}>
                  <SkipPreviousIcon className={classes.iconTool} />
                  <div className={classes.iconPlayContainer}>
                    <PlayArrowIcon className={classes.iconPlay} />
                  </div>
                  <SkipNextIcon className={classes.iconTool} />
                </div>
                <div className={classes.rangeContainer}>
                  <input
                    type="range"
                    id="vol"
                    name="vol"
                    min="0"
                    max="100"
                    className={classes.range}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.right}>
                <VolumeUpOutlinedIcon />
                <input type="range" id="vol" name="vol" min="0" max="100" />
                {isLaptop ? <OpenQueue /> : ''}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default PlayerControls;
