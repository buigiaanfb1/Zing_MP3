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
      transform: 'translate(100%, 0%)',
    },
  },

  openQueueLaptop: {
    overflow: 'hidden',
    zIndex: '99999',
    transform: 'translate(0%, 0%)',
    backgroundColor: 'var(--queue-player-popup-bg)',
  },

  ['@media (min-width:1637px)']: {
    // transform: 'translate(-100%, 0%)',
    main: {
      width: 'calc(100% - 560px)',
      minHeight: '100%',
      marginRight: '320px',
    },
  },
  ['@media (max-width:980px)']: {
    navbar: {
      width: '0px',
    },
    main: {
      width: 'calc(100%)',
      minHeight: '100%',
      // marginRight: '320px',
    },
  },
}));
