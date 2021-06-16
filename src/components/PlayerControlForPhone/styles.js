import { makeStyles } from '@material-ui/core';
import backgroundPlayer from '../../assets/images/backgroundPlayer.png';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100%',
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
    padding: '0 10px',
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
    // justifyContent: 'space-between',
    // transform: 'translateX(20px)',
  },

  containerAvatar: {
    width: '25%',
  },

  avatar: {
    maxWidth: '50px',
    maxHeight: '50px',
    borderRadius: '50%',
    border: '2px solid #fafafa',
  },
  containerText: {
    marginLeft: '0.5rem',
  },
  player: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: '14px',
    fontWeight: '700',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  author: {
    fontSize: '12px',
    lineHeight: '-50px',
    opacity: '0.7',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },

  iconTool: {
    fontSize: '30px',
  },

  iconToolContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: 'hsla(0, 0%, 100%, .1)',
    },
  },

  iconPlayContainer: {
    width: '35px',
    height: '35px',
    margin: '0 0.5rem',
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

  right: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ['@media (max-width:480px)']: {
    containerAvatar: {
      width: '40%',
    },
    avatar: {
      maxWidth: '45px',
      maxHeight: '45px',
    },
  },

  ['@media (max-width:320px)']: {
    containerAvatar: {
      width: '50%',
    },
    avatar: {
      maxWidth: '45px',
      maxHeight: '45px',
    },
  },
}));
