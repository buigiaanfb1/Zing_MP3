import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  trackVolume: {
    width: '64%',
    height: '3px',
    position: 'relative',
    overflow: 'hidden',
    background: 'var(--play-bar-progress)',
    '&:hover': {
      height: '5px',
    },
  },

  trackInputVolume: {
    width: '100%',
    cursor: 'pointer',
    WebkitAppearance: 'none',
    background: 'transparent',
    height: '16px',
    transform: 'translate(0, -50%)',
    margin: '0',
    '&:focus': {
      outline: 'none',
    },
    '&::-webkit-slider-thumb': {
      WebkitAppearance: 'none',
      height: '16px',
      width: '1px',
      background: 'transparent',
    },
    '&::-moz-slider-thumb': {
      WebkitAppearance: 'none',
    },
  },

  animateTrackVolume: {
    background: 'var(--play-bar)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '10',
    transform: 'translateX(0%)',
    pointerEvents: 'none',
  },

  volumeIcon: {
    width: '20px',
    height: '20px',
    marginRight: '5px',
    cursor: 'pointer',
  },

  rightVolume: {
    display: 'flex',
    alignItems: 'center',
  },
}));
