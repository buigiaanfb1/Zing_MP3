import React, { useEffect, useRef, useState } from 'react';
import { useStyles } from './styles';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@material-ui/icons/VolumeOffOutlined';

const Volume = () => {
  const classes = useStyles();
  const [volume, setVolume] = useState({
    volume: 0.5,
    lastVolume: 0,
  });
  useEffect(() => {
    document.getElementById('audio').volume = volume.volume;
  }, []);

  console.log(volume);

  // Unmute thì âm thanh vẫn như chỗ cũ
  const lastCurrentVolume = () => {
    document.getElementById('audio').volume = volume.lastVolume;
    setVolume({ ...volume, volume: volume.lastVolume });
  };

  const muteVolume = () => {
    document.getElementById('audio').volume = 0;
    setVolume({ ...volume, volume: 0 });
  };

  const dragHandler = (e) => {
    let value = e.target.value;
    let volumeRefactor = value / 100;
    // DOM ra ngoài audio
    if (volumeRefactor == 0.01) return;
    document.getElementById('audio').volume = volumeRefactor;
    setVolume({
      volume: volumeRefactor,
      lastVolume: volumeRefactor,
    });
  };

  const animationPercentage = volume.volume * 100;

  return (
    <div className={classes.rightVolume}>
      {volume.volume === 0 ? (
        <VolumeOffOutlinedIcon
          className={classes.volumeIcon}
          onClick={() => lastCurrentVolume()}
        />
      ) : (
        <VolumeUpOutlinedIcon
          className={classes.volumeIcon}
          onClick={() => muteVolume()}
        />
      )}
      <div className={classes.trackVolume}>
        <input
          value={volume.volume}
          onChange={dragHandler}
          className={classes.trackInputVolume}
          type="range"
          min="0"
          max="100"
        />
        <div
          className={classes.animateTrackVolume}
          style={{
            transform: `translateX(${animationPercentage}%)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Volume;
