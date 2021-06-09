import { makeStyles } from '@material-ui/core';
import backgroundPlayer from '../../assets/images/backgroundPlayer.png';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100%',
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  bgColor: {
    position: 'fixed',
    backgroundImage: `url(${backgroundPlayer})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    bottom: '0',
    zIndex: '99999',
    width: '100%',
  },
  container: {
    padding: '0 20px',
    height: '90px',
    color: 'var(--main-text)',
    borderTop: '1px solid var(--border-primary)',
  },

  containerLeftCenterRight: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },

  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    // transform: 'translateX(20px)',
  },

  avatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: '2px solid #fafafa',
  },
  player: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconToolContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: 'hsla(0, 0%, 100%, .1)',
    },
  },

  iconTool: {
    width: '28px',
    height: '28px',
  },
  iconPlayContainer: {
    margin: '0 1.5rem',
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    border: '1px solid #fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },

  iconPlay: {
    width: '28px',
    height: '28px',
  },

  icon: {
    width: '16px',
    height: '16px',
    marginLeft: '0.5rem',
  },

  rangeContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '0.5rem',
    fontFamily: "'Inter', sans-serif",
  },

  track: {
    width: '64%',
    height: '3px',
    position: 'relative',
    overflow: 'hidden',
    background: 'var(--play-bar-progress)',
    '&:hover': {
      height: '5px',
    },
  },

  trackInput: {
    width: '100%',
    cursor: 'pointer',
    WebkitAppearance: 'none',
    background: 'transparent',
    height: '16px',
    '&:focus': {
      outline: 'none',
    },
    '&::-webkit-slider-thumb': {
      WebkitAppearance: 'none',
      height: '16px',
      width: '16px',
      background: 'transparent',
    },
    '&::-moz-slider-thumb': {
      WebkitAppearance: 'none',
    },
  },

  animateTrack: {
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

  current: {
    fontFamily: 'inherit',
    color: 'var(--player-text)',
    opacity: '0.5',
    fontWeight: '500',
    fontSize: '12px',
    marginRight: '8px',
    width: '32px',
  },

  duration: {
    fontFamily: 'inherit',
    color: 'var(--player-text)',
    fontWeight: '500',
    fontSize: '12px',
    marginLeft: '8px',
    width: '35px',
  },

  right: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
