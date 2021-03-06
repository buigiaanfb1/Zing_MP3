import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    left: '240px',
    top: '0',
    right: '0',
    height: '70px',
    padding: '0 30px',
    zIndex: '99',
    minWidth: '660px',
    backgroundColor: 'var(--layout-bg)',
    boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
    transition: 'all 0.5s linear',
  },

  backgroundMoreThanZero: {
    backgroundColor: 'var(--layout-bg)',
    boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
  },

  direct: {
    display: 'flex',
    alignItems: 'center',
    color: 'var(--not-selected)',
  },

  directIcon: {
    marginRight: '1rem',
    transform: 'rotate(45deg)',
  },

  directIconCan: {
    color: 'var(--selected)',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },

  right: {
    color: 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  },

  iconContainer: {
    height: '38px',
    width: '38px',
    borderRadius: '50%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '0.6rem',
    backgroundColor: 'var(--icon-bg)',
  },

  icon: {
    color: 'var(--text-nav-color)',
  },

  avatar: {
    height: '40px',
    width: '40px',
    borderRadius: '50%',
  },

  popOver: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-30%, -50%)',
    zIndex: '10',
  },

  ['@media (min-width:1637px)']: {
    header: {
      right: '320px',
    },
  },

  ['@media (max-width:1024px)']: {
    header: {
      left: '70px',
    },
  },
  ['@media (max-width:680px)']: {
    header: {
      minWidth: 'calc(100vw - 70px)',
      padding: '0 10px',
    },
    right: {
      marginLeft: 'auto',
    },
  },
}));
