import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: '7rem 2.5rem',
    color: 'var(--text-primary)',
  },

  containerSongItem: {
    padding: ' 0 2.5rem',
  },

  root: {
    flexGrow: 1,
  },
  img: {
    borderRadius: '5px',
    width: '100%',
  },

  containerDescription: {
    marginTop: '5px',
  },

  titleAlbum: {
    fontFamily: 'inherit',
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '1.5',
    textAlign: 'center',
  },
  bodyScroll: {
    position: 'absolute',
    inset: '0',
    overflow: 'hidden auto',
    marginRight: '-0px',
    marginBottom: '00px',
  },
  createdBy: {
    fontSize: '12px',
    lineHeight: '1.75',
    color: 'var(--text-secondary)',
    textAlign: 'center',
  },
  userName: {
    color: 'var(--text-primary)',
  },

  ['@media (max-width:480px)']: {
    bodyScroll: {
      paddingBottom: '90px',
    },
    container: {
      padding: '7rem 1rem',
    },
  },
}));
