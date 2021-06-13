import React from 'react';
import { useStyles } from './styles';
import defaultCoverSong from '../../assets/images/defaultCoverSong.png';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { Grid, Typography } from '@material-ui/core';
import BaCham from '../BaCham';

const Song = ({ song, handleDispatchSong }) => {
  const classes = useStyles();

  const formatTime = (duration) => {
    return (
      ('0' + Math.floor(duration / 60)).slice(-2) +
      ':' +
      ('0' + Math.floor(duration % 60)).slice(-2)
    );
  };

  const handleUpToParent = () => {
    handleDispatchSong(song, song.title);
  };

  return (
    <div className={classes.songs}>
      <div
        className={`${classes.songItem} ${
          song.isSelected ? classes.songItemIsSelected : ''
        }`}
      >
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <div
              className={classes.songNameImgAuthContainer}
              onClick={() => handleUpToParent()}
            >
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
          <Grid item xs={2}>
            <div className={classes.time}>
              <Typography className={classes.timeText}>
                {formatTime(song.duration)}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.tools}>
              {/* <div className={classes.iconContainer}>
                <FavoriteBorderOutlinedIcon className={classes.icon} />
              </div> */}
              <div className={classes.iconContainerBaCham}>
                {/* <MoreHorizOutlinedIcon className={classes.icon} /> */}
                <BaCham song={song} />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Song;
