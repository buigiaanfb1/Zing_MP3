import React from 'react';
import { useStyles } from './styles';
import defaultCoverSong from '../../assets/images/defaultCoverSong.png';
import { Grid, Typography } from '@material-ui/core';
import BaCham from '../BaCham';
import { useMediaQuery } from 'react-responsive';

const Song = ({ song, handleDispatchSong }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
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
        <Grid container spacing={3}>
          <Grid item md={6} sm={6} xs={9}>
            <div
              className={classes.songNameImgAuthContainer}
              onClick={() => handleUpToParent()}
            >
              <img
                src={song.picture ? song.picture : defaultCoverSong}
                alt="song"
              />
              <div className={classes.songNameImgAuth}>
                {!isMobile ? (
                  <Typography className={classes.songTitle}>
                    {song.title.length > 38
                      ? song.title.substr(0, 38) + '...'
                      : song.title}
                  </Typography>
                ) : (
                  <Typography className={classes.songTitle}>
                    {song.title.length > 20
                      ? song.title.substr(0, 20) + '...'
                      : song.title}
                  </Typography>
                )}
                <Typography className={classes.author}>
                  {!isMobile ? song.artist : song.artist.substr(0, 25) + '...'}
                </Typography>
              </div>
            </div>
          </Grid>
          {!isMobile ? (
            <Grid item md={2} sm={2}>
              <div className={classes.time}>
                <Typography className={classes.timeText}>
                  {formatTime(song.duration)}
                </Typography>
              </div>
            </Grid>
          ) : (
            ''
          )}
          <Grid item md={4} sm={4} xs={3}>
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
