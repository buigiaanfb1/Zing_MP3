import { Grid, Typography } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import avatar from '../../assets/images/avatar.png';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { useStyles } from './styles';
import OpenQueue from '../OpenQueue';
import Despacito from '../../assets/music/despacito.mp3';
import { useMediaQuery } from 'react-responsive';
import Volume from '../Volume';

const PlayerControls = () => {
  const classes = useStyles();
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState({
    current: 0,
    duration: 0,
  });
  // responsive
  const isLaptop = useMediaQuery({ query: '(max-width: 1636px)' });

  // play current song, stop current song
  const handlePlaySong = () => {
    if (playing) {
      setPlaying(false);
      audioRef.current.pause();
    } else {
      setPlaying(true);
      audioRef.current.play();
    }
  };

  // Update current time của bài hát
  const handleTime = (e) => {
    let current = e.target.currentTime;
    let duration = e.target.duration || 0;
    setTime({ current, duration });
  };

  // format về ex: 00:00
  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };

  // kéo trong thanh input nhạc
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setTime({ ...time, current: e.target.value });
  };

  // Animation Track class
  const animationPercentage = (time.current / time.duration) * 100;

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
                  <div
                    className={classes.iconPlayContainer}
                    onClick={() => handlePlaySong()}
                  >
                    {playing ? (
                      <PauseIcon className={classes.iconPlay} />
                    ) : (
                      <PlayArrowIcon className={classes.iconPlay} />
                    )}
                  </div>
                  <SkipNextIcon className={classes.iconTool} />
                </div>
                <div className={classes.rangeContainer}>
                  <div>
                    <Typography className={classes.current}>
                      {formatTime(time.current)}
                    </Typography>
                  </div>
                  <div className={classes.track}>
                    <input
                      min={0}
                      max={time.duration}
                      value={time.current}
                      onChange={dragHandler}
                      type="range"
                      className={classes.trackInput}
                    />
                    <div
                      className={classes.animateTrack}
                      style={{
                        transform: `translateX(${animationPercentage}%)`,
                      }}
                    ></div>
                  </div>
                  <div>
                    <Typography className={classes.duration}>
                      {formatTime(time.duration)}
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.right}>
                <Volume />
                {isLaptop ? <OpenQueue /> : ''}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <audio
        id="audio"
        src={Despacito}
        ref={audioRef}
        onTimeUpdate={handleTime}
      />
    </div>
  );
};

export default PlayerControls;
