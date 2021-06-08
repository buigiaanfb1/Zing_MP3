import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  containerSongs: {
    margin: '0 2.5rem',
    borderRadius: '5px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--alpha-bg)',
    },
  },
  containerSongsIsSelected: {
    margin: '0 2.5rem',
    backgroundColor: 'var(--alpha-bg)',
    cursor: 'pointer',
  },
  songItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 15px',
    fontFamily: "'Inter', sans-serif",
    borderRadius: '5px',
    borderBottom: '1px solid var(--border-secondary)',
  },
  songNameImgAuthContainer: {
    display: 'flex',
    alignItems: 'center',

    '& img': {
      width: '100%',
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
  time: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontFamily: 'inherit',
    fontSize: '12px',
    color: 'var(--text-secondary)',
    fontWeight: '500',
  },
  tools: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  icon: {
    width: '18px',
    height: '18px',
    marginLeft: '1rem',
  },
}));
