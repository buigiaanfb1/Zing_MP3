import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  songItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    fontFamily: "'Inter', sans-serif",
    borderRadius: '5px',
    borderBottom: '1px solid var(--border-secondary)',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--alpha-bg)',
    },
  },

  songItemIsSelected: {
    backgroundColor: 'var(--alpha-bg)',
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
  time: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  timeText: {
    fontFamily: 'inherit',
    fontSize: '12px',
    color: 'var(--text-secondary)',
    fontWeight: '500',
  },
  tools: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
  },
  icon: {
    width: '18px',
    height: '18px',
    marginRight: '0.5rem',
  },
  // iconContainerBaCham: {
  //   position: 'absolute',
  //   top: '50%',
  //   transform: 'translate(0, -50%)',
  //   zIndex: '99999',
  // },
  ['@media (max-width:480px)']: {
    songTitle: {
      whiteSpace: 'wrap',
      textOverflow: 'clip',
      overflow: 'hidden',
    },
    author: {
      whiteSpace: 'wrap',
      textOverflow: 'clip',
      overflow: 'hidden',
    },
  },
}));
