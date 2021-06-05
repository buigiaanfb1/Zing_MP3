import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: '7rem 2.5rem',
    color: 'var(--text-primary)',
  },
  root: {
    flexGrow: 1,
  },
  containerSongs: {
    padding: ' 0 2.5rem',
  },
  songItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    fontFamily: "'Inter', sans-serif",
    borderRadius: '5px',
    borderBottom: '1px solid var(--border-secondary)',
  },
  songNameImgAuthContainer: {
    display: 'flex',
    alignItems: 'center',

    '& img': {
      maxWidth: '40px',
      maxHeight: '40px',
      borderRadius: '4px',
      marginRight: '10px',
    },
  },
  songTitle: {
    fontFamily: 'inherit',
    fontSize: '14px',
    color: 'var(--text-primary)',
    fontWeight: '500',
  },
  author: {
    fontFamily: 'inherit',
    fontSize: '12px',
    color: 'var(--text-secondary)',
    fontWeight: '500',
  },
  timeText: {
    fontFamily: 'inherit',
    fontSize: '12px',
    color: 'var(--text-secondary)',
    fontWeight: '500',
  },
  tools: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    width: '18px',
    height: '18px',
    marginLeft: '1rem',
  },

  img: {
    borderRadius: '5px',
  },
}));
