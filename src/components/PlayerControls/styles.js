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

  containerAvatar: {},
  avatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: '2px solid #fafafa',
  },
  containerText: {},
  tools: {},

  player: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: '16px',
    height: '16px',
    marginLeft: '1rem',
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
  },

  iconPlay: {
    width: '28px',
    height: '28px',
  },

  rangeContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '0.5rem',
  },

  range: {
    width: '70%',
    margin: '0 auto',
  },
}));
