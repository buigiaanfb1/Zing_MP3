import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    padding: '0 3.5rem',
    overflowY: 'hidden',
  },

  iconSignOut: {
    fontSize: '26px',
    color: 'var(--text-primary)',
  },

  iconContainer: {
    height: '38px',
    width: '38px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '0.6rem',
    backgroundColor: 'var(--icon-bg)',
    position: 'relative',
    marginLeft: 'auto',
    cursor: 'pointer',
  },

  popOver: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '10',
  },

  avatarContainer: {
    paddingTop: '89px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  avatar: {
    maxWidth: '95px',
    maxHeight: '95px',
    borderRadius: '50%',
  },

  name: {
    fontFamily: 'inherit',
    fontSize: '32px',
    fontWeight: '700',
    color: 'var(--text-primary)',
    marginTop: '10px',
  },

  // Scroll cho component nếu k có k scroll được
  containerContent: {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
  bodyScroll: {
    position: 'absolute',
    inset: '0',
    overflow: 'hidden auto',
    marginRight: '-0px',
    marginBottom: '90px',
  },

  ['@media (max-width:480px)']: {
    bodyScroll: {
      marginBottom: '200px',
    },

    container: {
      position: 'relative',
      padding: '0 0.5rem',
      overflowY: 'hidden',
    },
  },
}));
