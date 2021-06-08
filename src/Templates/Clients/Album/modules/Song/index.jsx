import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import defaultCoverSong from './../../../../../assets/images/defaultCoverSong.png';
import { useStyles } from './styles';

const Song = ({ song }) => {
  const classes = useStyles();

  const formatTime = (duration) => {
    return (
      ('0' + Math.floor(duration / 60)).slice(-2) +
      ':' +
      ('0' + Math.floor(duration % 60)).slice(-2)
    );
  };

  return (
    <div
      className={`${classes.containerSongs} ${
        song.isSelected ? classes.containerSongsIsSelected : ''
      }`}
    >
      <div className={classes.songs}>
        <div className={classes.songItem}>
          <Grid container spacing={0}>
            <Grid item xs={5}>
              <div className={classes.songNameImgAuthContainer}>
                <img
                  src={song.picture ? song.picture : defaultCoverSong}
                  alt="song"
                />
                <div className={classes.songNameImgAuth}>
                  <Typography className={classes.songTitle}>
                    {song.title.length > 38
                      ? song.title.substr(0, 38) + '...'
                      : song.title}
                  </Typography>
                  <Typography className={classes.author}>
                    {song.artist}
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.time}>
                <Typography className={classes.timeText}>
                  {formatTime(song.duration)}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.tools}>
                <div className={classes.iconContainer}>
                  <FavoriteBorderOutlinedIcon className={classes.icon} />
                </div>
                <div className={classes.iconContainer}>
                  <MoreHorizOutlinedIcon className={classes.icon} />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Song;
