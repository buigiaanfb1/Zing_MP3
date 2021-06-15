import { makeStyles } from '@material-ui/core';
import background from '../../../assets/images/background.svg';

export const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundImage: `url(${background})`,
    backgroundAttachment: 'fixed',
    overflow: 'hidden',
  },
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
  },
  navbar: {
    width: '240px',
  },
  main: {
    width: 'calc(100% - 240px)',
    minHeight: '100%',
    position: 'relative',
    overflow: 'auto !important',
  },
  playerQueue: {
    position: 'absolute',
    zIndex: '0',
    right: '0',
    top: '0',
    maxHeight: '100%',
    width: '320px',
    zIndex: '7',
    borderLeft: '1px solid var(--border-primary)',
    transition: 'all 1s ease-out',
  },

  ['@media (max-width:1637px)']: {
    playerQueue: {
      display: 'block',
      transform: 'translate(100%, 0%)',
    },
  },

  openQueueLaptop: {
    overflow: 'hidden',
    zIndex: '99999',
    display: 'block',
    transform: 'translate(0%, 0%)',
    backgroundColor: 'var(--queue-player-popup-bg)',
  },

  ['@media (min-width:1637px)']: {
    main: {
      width: 'calc(100% - 560px)',
      minHeight: '100%',
      marginRight: '320px',
    },
  },
  ['@media (max-width:1024px)']: {
    navbar: {
      // backgroundColor: 'var(--main-color)',
      position: 'fixed',
      width: '70px',
      top: '0',
      height: 'calc(100vh - 70px)',
      paddingBottom: '50px',
      transition: 'width .3s ease-out',
    },
    main: {
      marginLeft: '70px',
      height: '100vh',
      width: 'calc(100% - 70px)',
      minHeight: '100%',
    },
    playerQueue: {
      display: 'none',
      transform: 'translate(100%, 0%)',
    },
    openQueueLaptop: {
      display: 'block',
      transform: 'translate(0%, 0%)',
    },
  },
}));
