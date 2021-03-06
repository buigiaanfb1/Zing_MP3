import { Grid, Typography } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import defaultCoverSong from '../../assets/images/defaultCoverSong.png';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { useStyles } from './styles';
import OpenQueue from '../OpenQueue';
import { useMediaQuery } from 'react-responsive';
import Volume from '../Volume';
import { useSelector, useDispatch } from 'react-redux';
import {
  CHANGE_NEXT_SONG,
  CHANGE_PREVIOUS_SONG,
  IS_PLAYING,
} from '../../Templates/Clients/Album/modules/constants';
import BaCham from '../BaCham';

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
  // init dispatch
  const dispatch = useDispatch();
  // selector
  let song = useSelector((state) => state.shareStore.selectedSong);

  useEffect(() => {
    if (song) {
      // handlerAutoPlay();
    }
  }, [song]);

  useEffect(() => {
    handleSaveLocalStorageCurrentSong();
  }, [song]);

  // lưu bài hát đang hát xuống localStorage
  // để lần sau vào lại web vẫn còn bài đó
  const handleSaveLocalStorageCurrentSong = () => {
    if (song) {
      localStorage.setItem('zmp3_current_player', JSON.stringify(song));
    }
  };

  // dispatch bài hát tiếp theo qua icon next
  const handleNextSong = () => {
    dispatch({
      type: CHANGE_NEXT_SONG,
    });
  };

  // dispatch bài hát trước đó theo qua icon next
  const handlePreviousSong = () => {
    dispatch({
      type: CHANGE_PREVIOUS_SONG,
    });
  };

  // play current song, stop current song
  const handlePlaySong = () => {
    if (playing) {
      setPlaying(false);
      audioRef.current.pause();
      dispatch({
        type: IS_PLAYING,
      });
    } else {
      setPlaying(true);
      audioRef.current.play();
      dispatch({
        type: IS_PLAYING,
      });
    }
  };

  const handlerAutoPlay = () => {
    // nếu không phải nhạc lưu dưới local thì aut
    if (!song.hasOwnProperty('local')) {
      let audio = document.querySelector('audio').play();
      if (audio !== undefined) {
        audio
          .then((_) => {
            // Autoplay started!
            audioRef.current.play();
            setPlaying(true);
          })
          .catch((error) => {
            // Autoplay was prevented.
            // Show a "Play" button so that user can start playback.
          });
      }
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

  const handleRenderSongIsPlaying = () => {
    return (
      <div className={classes.bgColor}>
        <div className={classes.container}>
          <div className={classes.root}>
            <Grid container className={classes.containerLeftCenterRight}>
              <Grid item xs={3}>
                <div className={classes.left}>
                  <div className={classes.containerAvatar}>
                    <img
                      src={song.picture ? song.picture : defaultCoverSong}
                      className={`${classes.avatar} ${
                        playing ? 'spin-cover' : ''
                      }`}
                    />
                  </div>
                  <div className={classes.containerText}>
                    <Typography className={classes.title}>
                      {song.title.length > 20
                        ? song.title.substr(0, 20) + '...'
                        : song.title}
                    </Typography>
                    <Typography className={classes.author}>
                      {song.artist}
                    </Typography>
                  </div>
                  <div className={classes.tools}>
                    <BaCham song={song} />
                  </div>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.center}>
                  <div className={classes.player}>
                    <div className={classes.iconToolContainer}>
                      <SkipPreviousIcon
                        className={classes.iconTool}
                        onClick={() => handlePreviousSong()}
                      />
                    </div>
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
                    <div className={classes.iconToolContainer}>
                      <SkipNextIcon
                        className={classes.iconTool}
                        onClick={() => handleNextSong()}
                      />
                    </div>
                    {/* <div className={classes.iconToolContainer}>
                      <LoopOutlinedIcon
                        className={classes.iconTool}
                        onClick={() => handleNextSong()}
                      />
                    </div> */}
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
          src={song.song}
          ref={audioRef}
          onTimeUpdate={handleTime}
          onLoadedData={handlerAutoPlay}
          onEnded={handleNextSong}
        />
      </div>
    );
  };

  // Animation Track class
  const animationPercentage = (time.current / time.duration) * 100;

  return song ? handleRenderSongIsPlaying() : '';
};

export default PlayerControls;
